import { Grid, Typography } from '@mui/material';
import React from 'react';
import BasicContainer from '../components/BasicContainer';

const Chap2 = () => (
  <div>
    <Grid container sx={{ minHeight: '100vh', backgroundColor: '#FBD166' }}>
      <BasicContainer>
        <Typography variant="h2" align="center" mb="2vh">
          Chapter 2: In search of employment
        </Typography>
      </BasicContainer>
    </Grid>
  </div>
);

export default Chap2;
