import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api';
import { useCallback, useEffect, useRef, useState } from 'react';

interface Coordinate {
  lat: number;
  lng: number;
}

interface LocalInformationProps {
  coordinates: Coordinate;
}

const containerStyle = {
  width: '100%',
  height: '420px',
  borderRadius: '20px',
};

const categories: { key: string; label: string; type: string }[] = [
  { key: 'school', label: 'School', type: 'school' },
  { key: 'supermarket', label: 'Super shop', type: 'supermarket' },
  { key: 'park', label: 'Park', type: 'park' },
  { key: 'atm', label: 'ATMs', type: 'atm' },
];

const LocalInformation = ({ coordinates }: LocalInformationProps) => {
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY as string,
    libraries: ['places'],
  });

  const mapRef = useRef<google.maps.Map | null>(null);
  const [activeCat, setActiveCat] = useState(categories[0]);
  const [markers, setMarkers] = useState<google.maps.LatLngLiteral[]>([]);

  const onLoad = useCallback((map: google.maps.Map) => {
    mapRef.current = map;
  }, []);

  const fitAll = useCallback(
    (points: google.maps.LatLngLiteral[]) => {
      if (!mapRef.current) return;
      const bounds = new google.maps.LatLngBounds();
      // include main property point
      bounds.extend(coordinates);
      points.forEach((p) => bounds.extend(p));
      mapRef.current.fitBounds(bounds);
    },
    [coordinates]
  );

  // fetch places for category
  useEffect(() => {
    if (!isLoaded || !mapRef.current) return;

    const service = new google.maps.places.PlacesService(mapRef.current);
    const request: google.maps.places.PlaceSearchRequest = {
      location: coordinates,
      radius: 5000,
      type: activeCat.type,
    };

    service.nearbySearch(request, (results, status) => {
      if (status === google.maps.places.PlacesServiceStatus.OK && results) {
        const pts = results.map((r) => ({ lat: r.geometry?.location?.lat() ?? 0, lng: r.geometry?.location?.lng() ?? 0 }));
        setMarkers(pts);
        fitAll(pts);
      } else {
        setMarkers([]);
        fitAll([]);
      }
    });
  }, [activeCat, isLoaded, coordinates, fitAll]);

  if (!isLoaded) return <p>Loading map...</p>;

  return (
    <div>
      {/* Category buttons */}
      <div className="flex flex-wrap gap-3 mb-4 ">
        {categories.map((c) => (
          <button
            key={c.key}
            // onClick={() => setActiveCat(c)}
            className={`padding2 px-4 py-2 rounded-full border border-[#3B3B3B] flex items-center gap-2 ${activeCat.key === c.key ? 'bg-[#EDB75E] text-black' : 'bg-black text-white'}`}
          >
            {c.label}
          </button>
        ))}
      </div>

      {/* Map */}
      <div className='mt5'>
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={coordinates}
          zoom={14}
          onLoad={onLoad}
          options={{
            styles: [
              { elementType: 'geometry', stylers: [{ color: '#242f3e' }] },
              { elementType: 'labels.text.stroke', stylers: [{ color: '#242f3e' }] },
              { elementType: 'labels.text.fill', stylers: [{ color: '#746855' }] },
              { featureType: 'poi', elementType: 'labels.text.fill', stylers: [{ color: '#d59563' }] },
            ]
          }}
        >
          {/* Main property marker */}
          <Marker position={coordinates} label="P" />
          {/* nearby markers */}
          {markers.map((m, idx) => (
            <Marker key={idx} position={m} icon={{ url: '/images/marker-yellow.png', scaledSize: new google.maps.Size(30, 30) }} />
          ))}
        </GoogleMap>
      </div>

    </div>
  );
};

export default LocalInformation; 