import { Grid } from '@mui/material';
import React from 'react';

const TorontoParallax = () => (
  <Grid
    container
    direction="column"
    justifyContent="flex-end"
    alignItems="stretch"
    sx={{
      width: '100%',
      position: 'relative',
      height: '50vh',
      overflowX: 'hidden',
    }}>
    <img
      className="absolute"
      src="/assets/images/background.png"
      alt=""
      width="100%"
    />
    <img
      className="absolute"
      src="/assets/images/bgclouds.png"
      alt=""
      width="100%"
    />
    <img
      className="absolute"
      src="/assets/images/foregroundclouds.png"
      alt=""
      width="100%"
    />
    <img
      className="absolute"
      src="/assets/images/buildings.png"
      alt=""
      width="100%"
    />
  </Grid>
);

export default TorontoParallax;
