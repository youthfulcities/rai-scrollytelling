import { Grid, Typography } from '@mui/material';
import React from 'react';
import BasicContainer from '../components/BasicContainer';

const Chap5 = () => (
  <div>
    <Grid container sx={{ minHeight: '100vh', backgroundColor: '#253D88' }}>
      <BasicContainer>
        <Typography variant="h2" color="#fff" align="center" mb="2vh">
          Chapter 5: In search of fulfillment
        </Typography>
      </BasicContainer>
    </Grid>
  </div>
);

export default Chap5;
