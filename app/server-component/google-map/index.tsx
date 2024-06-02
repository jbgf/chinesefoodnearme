'use client';
import { GoogleMapsEmbed } from '@next/third-parties/google'
import { GOOGLE_MAP_API_KEY } from './const'
import { useEffect, useState } from 'react';

export default function GoogleMap() {
  const [location, setLocation] = useState<string>();
  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        const { latitude, longitude } = position.coords;
        setLocation(`${latitude},${longitude}`);
      });
    }
  }, []);

  console.log(location, 'location');

  return (
    <GoogleMapsEmbed
      apiKey={GOOGLE_MAP_API_KEY}
      height={400}
      width="100%"
      mode="search"
      q="chinese+food" //+in+NewYork
      center={location}
      zoom={`10`}
    />
  )
}