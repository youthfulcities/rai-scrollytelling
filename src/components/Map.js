import Brightness1RoundedIcon from '@mui/icons-material/Brightness1Rounded';
import { Grid, Typography } from '@mui/material';
import bbox from '@turf/bbox';
import React, { useEffect, useRef, useState } from 'react';
import Map, { NavigationControl, Popup } from 'react-map-gl';

import 'mapbox-gl/dist/mapbox-gl.css';

const MAPBOX_TOKEN = process.env.REACT_APP_MAPBOX_TOKEN;

const MapView = () => {
  const initialView = {
    longitude: -86.08,
    latitude: 54.67,
    pitch: 40,
    bearing: 13.6,
    zoom: 3,
    duration: 2000,
  };

  const [viewState, setViewState] = useState(initialView);
  const [completed, setCompleted] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [tuition, setTuition] = useState({});

  const mapRef = useRef();

  const onClick = (event) => {
    const feature = event.features[0];
    console.log(event.features);
    const undergradFeature = event.features[event.features.length - 1];

    if (feature) {
      // calculate the bounding box of the feature
      const { grad, undergrad, prov_name_en } = feature.properties;
      const { r, g, b } = feature.layer.paint['fill-extrusion-color'];
      const {
        r: r1,
        g: g1,
        b: b1,
      } = undergradFeature.layer.paint['fill-extrusion-color'];
      const [minLng, minLat, maxLng, maxLat] = bbox(feature);

      mapRef.current.fitBounds(
        [
          [minLng, minLat],
          [maxLng, maxLat],
        ],
        { padding: 40, duration: 1000 }
      );
      setTuition({
        grad,
        undergrad,
        prov: prov_name_en,
        gradColor: { r, g, b },
        undergradColor: { r: r1, g: g1, b: b1 },
      });
      setCompleted(true);
    }
  };

  useEffect(() => {
    setShowPopup(true);
    return () => {
      setCompleted(false);
      setShowPopup(false);
    };
  }, [completed]);

  // const reset = () => {
  //   mapRef.current?.flyTo({
  //     center: [initialView.longitude, initialView.latitude],
  //     zoom: initialView.zoom,
  //     pitch: initialView.pitch,
  //     bearing: initialView.bearing,
  //     duration: 2000,
  //   });
  // };

  return (
    <>
      <Map
        latitude={viewState.latitude}
        longitude={viewState.longitude}
        zoom={viewState.zoom}
        ref={mapRef}
        initialViewState={initialView}
        scrollZoom={false}
        touchPitch={false}
        projection="globe"
        onMove={(e) => setViewState(e.viewState)}
        style={{ width: '100%', height: '100vh' }}
        mapStyle="mapbox://styles/youthfulcities/cl759qkgf000015tcpu2ba6fc"
        interactiveLayerIds={[
          'tuition-undergrad',
          'tuition-grad plus undergrad',
        ]}
        onClick={onClick}
        mapboxAccessToken={MAPBOX_TOKEN}>
        <div style={{ position: 'absolute', zIndex: '10' }}>
          <NavigationControl />
        </div>
        {showPopup && tuition.prov && (
          <Popup
            style={{
              borderRadius: '35px',
            }}
            longitude={viewState.longitude}
            latitude={viewState.latitude}
            anchor="bottom"
            closeOnClick
            onClose={() => setShowPopup(false)}>
            <Grid container p={1}>
              <Typography variant="h5">
                Tuition costs in {tuition.prov}
              </Typography>
              <Grid
                item
                container
                alignItems="flex-start"
                justifyContent="flex-start"
                flexWrap="nowrap"
                sx={{ height: '100%' }}>
                <Grid item>
                  <Brightness1RoundedIcon
                    sx={{
                      color: `rgba(${Math.floor(
                        tuition.undergradColor.r * 255
                      )},${Math.floor(
                        tuition.undergradColor.g * 255
                      )},${Math.floor(tuition.undergradColor.b * 255)},1)`,
                    }}
                  />
                </Grid>
                <Grid item>
                  <Typography variant="body1">
                    <strong>Undergraduate:</strong>
                    {` $${tuition.undergrad}`}
                  </Typography>
                </Grid>
              </Grid>
              {tuition.grad && (
                <>
                  <Brightness1RoundedIcon
                    sx={{
                      color: `rgba(${Math.floor(
                        tuition.gradColor.r * 255
                      )},${Math.floor(tuition.gradColor.g * 255)},${Math.floor(
                        tuition.gradColor.b * 255
                      )},1)`,
                    }}
                  />
                  <Typography variaqnt="body1">
                    <strong>Graduate:</strong>
                    {` $${tuition.grad}`}
                  </Typography>
                </>
              )}
            </Grid>
          </Popup>
        )}
      </Map>
      {/* <Button
        variant="contained"
        color="secondary"
        type="submit"
        onClick={reset}>
        Reset
      </Button> */}
    </>
  );
};

export default MapView;
