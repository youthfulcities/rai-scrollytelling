import { Grid } from '@mui/material';
import React from 'react';

const FloorPlan = () => (
  <Grid container sx={{ width: '100%' }}>
    <img
      src="/assets/images/plan.png"
      width="100%"
      alt="Floor plan of a 1-bedroom appartment"
    />
  </Grid>
);

export default FloorPlan;
