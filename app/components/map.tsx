'use client';

import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import type { Factory } from '@/types';

// Props definition for the component
interface MapProps {
  factories: Factory[];
}

// Fix for default marker icon issue with webpack
const defaultIcon = new L.Icon({
  iconUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png',
  iconRetinaUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});

const maintenanceIcon = new L.Icon({
  iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-red.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41]
});


const Map: React.FC<MapProps> = ({ factories }) => {
  // Default map center (Amman, Jordan)
  const position: [number, number] = [31.9539, 35.9106];

  return (
    <MapContainer
      center={position}
      zoom={7}
      scrollWheelZoom={false}
      style={{ height: '500px', width: '100%' }}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      {factories.map((factory) => (
        <Marker
          key={factory.id}
          position={[factory.location.latitude, factory.location.longitude]}
          icon={factory.status === 'maintenance' ? maintenanceIcon : defaultIcon}
        >
          <Popup>
            <div className="font-sans">
              <h3 className="font-bold text-lg">{factory.name}</h3>
              <p>
                <strong>Status:</strong>{' '}
                <span
                  className={
                    factory.status === 'maintenance'
                      ? 'text-red-600'
                      : 'text-green-600'
                  }
                >
                  {factory.status}
                </span>
              </p>
              <p>
                <strong>Location:</strong> {factory.location.city},{' '}
                {factory.location.country}
              </p>
               <p>
                <strong>Manager:</strong> {factory.contact.manager}
              </p>
            </div>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};

export default Map;