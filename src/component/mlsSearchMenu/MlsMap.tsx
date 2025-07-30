'use client';

import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api';
import { useState } from 'react';

const containerStyle = {
  width: '100%',
  height: '400px',
  borderRadius: '30px',
};

const center = {
  lat: 28.6139,
  lng: 77.2090,
};

const GoogleMapComponent = () => {
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: "AIzaSyBebKRxO32tCMD-9kzex13fYGyWdjSvCdU", 
  });

  const [position, setPosition] = useState(center);

  if (!isLoaded) return <p>Loading map...</p>;

  return (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={position}
      zoom={12}
    >
      <Marker position={position} />
    </GoogleMap>
  );
};

export default GoogleMapComponent;
