import Brightness1RoundedIcon from '@mui/icons-material/Brightness1Rounded';
import {
  Button,
  Grid,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import React, { useEffect, useRef, useState } from 'react';
import Map, { NavigationControl, Popup } from 'react-map-gl';

import 'mapbox-gl/dist/mapbox-gl.css';

const MAPBOX_TOKEN = process.env.REACT_APP_MAPBOX_TOKEN;

const MapView = () => {
  const initialView = {
    longitude: -86.08,
    latitude: 54.67,
    pitch: 0,
    bearing: 13.6,
    zoom: 3,
    duration: 2000,
  };

  const theme = useTheme();
  const smallScreen = useMediaQuery(theme.breakpoints.down('md'));

  const [viewState, setViewState] = useState(initialView);
  const [completed, setCompleted] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [tuition, setTuition] = useState({});

  const mapRef = useRef();

  const onClick = (event) => {
    const feature = event.features[0];
    const { lat, lng } = event.lngLat;

    // const undergradFeature = event.features[event.features.length - 1];

    if (feature) {
      // calculate the bounding box of the feature
      const { r, g, b } = feature.layer.paint['circle-color'];
      // const {
      //   r: r1,
      //   g: g1,
      //   b: b1,
      // } = undergradFeature.layer.paint['fill-color'];
      // const [minLng, minLat, maxLng, maxLat] = bbox(feature);

      // mapRef.current.fitBounds(
      //   [
      //     [minLng, minLat],
      //     [maxLng, maxLat],
      //   ],
      //   { padding: 40, duration: 1000 }
      // );

      mapRef.current?.flyTo({
        center: [lng, lat],
        zoom: viewState.zoom,
        pitch: viewState.pitch,
        bearing: viewState.bearing,
        duration: 2000,
      });

      setTuition({
        cost: feature.properties.tuition,
        level: feature.properties['Level of study'],
        prov: feature.properties['Province '],
        color: { r, g, b },
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

  const reset = () => {
    mapRef.current?.flyTo({
      center: [initialView.longitude, initialView.latitude],
      zoom: initialView.zoom,
      pitch: initialView.pitch,
      bearing: initialView.bearing,
      duration: 2000,
    });
  };

  return (
    <>
      <Grid container sx={{ width: '100%' }} justifyContent="center" mb={2}>
        <Button
          variant="contained"
          color="secondary"
          type="submit"
          onClick={reset}>
          Reset Map
        </Button>
      </Grid>
      <Map
        latitude={viewState.latitude}
        longitude={viewState.longitude}
        zoom={viewState.zoom}
        ref={mapRef}
        initialViewState={initialView}
        scrollZoom={false}
        projection="globe"
        onMove={(e) => setViewState(e.viewState)}
        style={{ width: '100%', height: smallScreen ? '50vh' : '90vh' }}
        mapStyle="mapbox://styles/youthfulcities/cl759qkgf000015tcpu2ba6fc"
        interactiveLayerIds={['tuition-undergraduate', 'tuition-graduate']}
        onClick={onClick}
        mapboxAccessToken={MAPBOX_TOKEN}>
        <NavigationControl />
        {showPopup && tuition.prov && (
          <Popup
            style={{
              borderRadius: '35px',
              filter:
                'drop-shadow(0px 100px 80px rgba(0, 0, 0, 0.07)) drop-shadow(0px 41.7776px 33.4221px rgba(0, 0, 0, 0.0503198)) drop-shadow(0px 22.3363px 17.869px rgba(0, 0, 0, 0.0417275)) drop-shadow(0px 12.5216px 10.0172px rgba(0, 0, 0, 0.035)) drop-shadow(0px 6.6501px 5.32008px rgba(0, 0, 0, 0.0282725)) drop-shadow(0px 2.76726px 2.21381px rgba(0, 0, 0, 0.0196802))',
            }}
            longitude={viewState.longitude}
            latitude={viewState.latitude}
            anchor="bottom"
            closeOnClick
            onClose={() => setShowPopup(false)}>
            <Grid container p={1}>
              <Typography variant="body1" textTransform="uppercase">
                <strong>
                  Domestic {tuition.level} tuition cost in {tuition.prov}
                </strong>
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
                        tuition.color.r * 255
                      )},${Math.floor(tuition.color.g * 255)},${Math.floor(
                        tuition.color.b * 255
                      )},1)`,
                    }}
                  />
                </Grid>
                <Grid item>
                  <Typography variant="body1">{` $${tuition.cost}`}</Typography>
                </Grid>
              </Grid>
            </Grid>
          </Popup>
        )}
      </Map>
    </>
  );
};

export default MapView;
