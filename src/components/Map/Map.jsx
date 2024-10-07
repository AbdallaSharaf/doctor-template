import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const MapComponent = () => {
  const position = [30.7861136, 31.0006258]; // Position from the Google Maps link
  const googleMapsLink = `https://www.google.com/maps?q=${position[0]},${position[1]}`;

  return (
    <div id="map" className="relative h-[250px] mt-16 mb-32 w-full">
      <MapContainer 
        center={position} 
        zoom={17} 
        scrollWheelZoom={true} 
        attributionControl={false} // Disable attribution
        style={{ height: "100%", width: "100%", zIndex: 0 }}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={position}>
          <Popup className="text-end">
          <div className="text-center">
              <p className="font-semibold">طنطا تاون مول</p>
              <a 
                href={googleMapsLink} 
                target="_blank" 
                rel="noopener noreferrer"
                className="block px-4 text-primary text-center rounded-sm"
              >
                فتح في خرائط جوجل
              </a>
            </div>
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default MapComponent;
