import bbox from '@turf/bbox';
import React, { useRef, useState } from 'react';
import Map from 'react-map-gl';

import 'mapbox-gl/dist/mapbox-gl.css';

const MAPBOX_TOKEN = process.env.REACT_APP_MAPBOX_TOKEN;

const MapView = () => {
  const initialView = {
    longitude: -86.08,
    latitude: 54.67,
    zoom: 3,
  };

  const [viewState, setViewState] = useState(initialView);

  const mapRef = useRef();

  const onClick = (event) => {
    const feature = event.features[0];
    if (feature) {
      // calculate the bounding box of the feature
      const [minLng, minLat, maxLng, maxLat] = bbox(feature);

      mapRef.current.fitBounds(
        [
          [minLng, minLat],
          [maxLng, maxLat],
        ],
        { padding: 40, duration: 1000 }
      );
    }
  };

  const reset = () => {
    setViewState(initialView);
  };

  return (
    <>
      <Map
        latitude={viewState.latitude}
        longitude={viewState.longitude}
        zoom={viewState.zoom}
        ref={mapRef}
        initialViewState={initialView}
        onMove={(e) => setViewState(e.viewState)}
        style={{ width: '100%', height: 600 }}
        mapStyle="mapbox://styles/youthfulcities/cl58he38x001t15qpntaryouo"
        interactiveLayerIds={['rai-rent']}
        onClick={onClick}
        mapboxAccessToken={MAPBOX_TOKEN}
      />
      <p>Lat: {viewState.latitude}</p>
      <p>Long: {viewState.longitude}</p>
      <button type="submit" onClick={reset}>
        Reset
      </button>
    </>
  );
};

export default MapView;
