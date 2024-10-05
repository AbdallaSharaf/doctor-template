import React, { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp } from '@fortawesome/free-solid-svg-icons';

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
};

const MapComponent = () => {
  const defaultPosition = [30.7861136, 31.0006258]; // Position from the Google Maps link
  const [position, setPosition] = useState(defaultPosition); // Set default position

  return (
    <div className="relative h-[250px] mt-16 mb-12 w-full">
      <MapContainer center={position} zoom={17} scrollWheelZoom={false} style={{ height: "100%", width: "100%", zIndex: 0 }}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={position}>
          <Popup>
            طنطا تاون مول <br /> Latitude: {position[0]}, Longitude: {position[1]}
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default MapComponent;
