import React from 'react';
import { MapProvider } from 'react-map-gl';

import Map from '../hooks/map';

const MapComponent = () => (
  <MapProvider>
    <Map />
  </MapProvider>
);

export default MapComponent;
