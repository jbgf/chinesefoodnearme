'use client';
import { GoogleMapsEmbed } from '@next/third-parties/google'
import { GOOGLE_MAP_API_KEY } from './const'
import { useEffect, useState } from 'react';

export default function GoogleMap() {
  const [location, setLocation] = useState<string>();
  const [mapHeight, setMapHeight] = useState('100%');

  useEffect(() => {
    // 获取位置
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        const { latitude, longitude } = position.coords;
        setLocation(`${latitude},${longitude}`);
      });
    }

    // 计算地图高度
    const calculateHeight = () => {
      const windowHeight = window.innerHeight;
      const headerHeight = 64; // 顶部导航的高度
      const newHeight = (windowHeight - headerHeight) * 0.6;
      setMapHeight(`${newHeight}px`);
    };

    // 初始计算
    calculateHeight();

    // 监听窗口大小变化
    window.addEventListener('resize', calculateHeight);

    // 清理监听器
    return () => window.removeEventListener('resize', calculateHeight);
  }, []);

  return (
    <GoogleMapsEmbed
      apiKey={GOOGLE_MAP_API_KEY}
      height={mapHeight}
      width="100%"
      mode="search"
      q="chinese+food"
      center={location}
      zoom={`10`}
    />
  )
}