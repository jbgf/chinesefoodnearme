'use client';

import { useEffect, useRef, useState } from 'react';
import { useFilters } from '@/app/contexts/FilterContext';
import { MapLocation, Restaurant } from '@/app/types/map';
import { Loader } from '@googlemaps/js-api-loader';
import { GOOGLE_MAP_API_KEY } from './const';


export default function GoogleMap() {
  const mapRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<google.maps.Map>();
  const markersRef = useRef<google.maps.Marker[]>([]);
  const { filters } = useFilters();
  const [userLocation, setUserLocation] = useState<MapLocation>();
  const [restaurants, setRestaurants] = useState<Restaurant[]>([]);

  // 初始化地图
  useEffect(() => {
    const initMap = async () => {
      const loader = new Loader({
        apiKey: GOOGLE_MAP_API_KEY,
        version: 'weekly',
        libraries: ['places']
      });

      try {
        const google = await loader.load();

        // 获取用户位置
        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(
            (position) => {
              const location = {
                lat: position.coords.latitude,
                lng: position.coords.longitude
              };
              setUserLocation(location);

              // 初始化地图
              if (mapRef.current && !mapInstanceRef.current) {
                const map = new google.maps.Map(mapRef.current, {
                  center: location,
                  zoom: 14,
                  styles: [/* 可以添加自定义地图样式 */]
                });
                mapInstanceRef.current = map;

                // 添加地图点击事件
                map.addListener('click', (e: google.maps.MapMouseEvent) => {
                  if (e.latLng) {
                    const newLocation = {
                      lat: e.latLng.lat(),
                      lng: e.latLng.lng()
                    };
                    setUserLocation(newLocation);
                    searchNearbyRestaurants(map, newLocation);
                  }
                });

                // 添加用户位置标记
                new google.maps.Marker({
                  position: location,
                  map: map,
                  icon: {
                    path: google.maps.SymbolPath.CIRCLE,
                    scale: 10,
                    fillColor: '#4285F4',
                    fillOpacity: 1,
                    strokeColor: 'white',
                    strokeWeight: 2,
                  },
                  title: 'Your Location'
                });

                // 初始搜索
                searchNearbyRestaurants(map, location);
              }
            },
            (error) => {
              console.error('Error getting location:', error);
              // 默认位置
              const defaultLocation = { lat: 40.7128, lng: -74.0060 };
              setUserLocation(defaultLocation);
            }
          );
        }
      } catch (error) {
        console.error('Error loading Google Maps:', error);
      }
    };

    initMap();
  }, []);

  // 搜索附近餐厅
  const searchNearbyRestaurants = async (
    map: google.maps.Map,
    location: MapLocation
  ) => {
    const service = new google.maps.places.PlacesService(map);

    // 清除现有标记
    markersRef.current.forEach(marker => marker.setMap(null));
    markersRef.current = [];

    // 定义搜索半径数组（单位：米）
    const searchRadii = [5000, 10000, 20000, 30000];

    // 递归函数来尝试不同的搜索半径
    const searchWithRadius = async (radiusIndex: number) => {
      if (radiusIndex >= searchRadii.length) {
        console.log('没有找到任何餐厅');
        return;
      }

      const request = {
        location: location,
        radius: searchRadii[radiusIndex],
        type: 'restaurant',
        keyword: `chinese ${filters.cuisine !== 'All' ? filters.cuisine : ''}`
      };

      service.nearbySearch(request, (results, status) => {
        if (status === google.maps.places.PlacesServiceStatus.OK && results && results.length > 0) {
          const filteredResults = results.filter(place => {
            if (filters.rating !== 'All') {
              const minRating = parseFloat(filters.rating);
              return place.rating && place.rating >= minRating;
            }
            return true;
          });

          if (filteredResults.length > 0) {
            // 创建边界对象以包含所有标记
            const bounds = new google.maps.LatLngBounds();
            bounds.extend(location); // 包含用户位置

            filteredResults.forEach(place => {
              if (place.geometry?.location) {
                // 创建标记
                const marker = new google.maps.Marker({
                  map: map,
                  position: place.geometry.location,
                  title: place.name,
                  animation: google.maps.Animation.DROP
                });

                // 创建信息窗口
                const infoWindow = new google.maps.InfoWindow({
                  content: `
                    <div class="p-2">
                      <h3 class="font-bold">${place.name}</h3>
                      <p>Rating: ${place.rating} ⭐</p>
                      ${place.vicinity ? `<p>${place.vicinity}</p>` : ''}
                    </div>
                  `
                });

                // 添加点击事件
                marker.addListener('click', () => {
                  infoWindow.open(map, marker);
                });

                markersRef.current.push(marker);
                bounds.extend(place.geometry.location);
              }
            });

            // 调整地图以显示所有标记
            map.fitBounds(bounds);

            // 如果只有一个结果，设置适当的缩放级别
            if (filteredResults.length === 1) {
              map.setZoom(15);
            }
          } else {
            // 如果过滤后没有结果，尝试更大的半径
            searchWithRadius(radiusIndex + 1);
          }
        } else {
          // 如果没有找到结果，尝试更大的半径
          searchWithRadius(radiusIndex + 1);
        }
      });
    };

    // 开始搜索，从最小半径开始
    searchWithRadius(0);
  };

  // 监听筛选条件变化
  useEffect(() => {
    if (mapInstanceRef.current && userLocation) {
      searchNearbyRestaurants(mapInstanceRef.current, userLocation);
    }
  }, [filters]);

  return (
    <div
      ref={mapRef}
      className="w-full h-full rounded-lg"
      style={{ minHeight: '100%' }}
    />
  );
}