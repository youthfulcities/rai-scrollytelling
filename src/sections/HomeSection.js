import { Grid, Typography } from '@mui/material';
import React, { forwardRef } from 'react';
import BasicContainer from '../components/BasicContainer';
import HomeStats from '../components/HomeStats';

const HomeSection = ({ el, homeInView, chap1InView }, ref) => (
  <section ref={ref} id="home">
    <Grid container sx={{ minHeight: '100vh' }}>
      <BasicContainer>
        <Typography variant="h1" align="center" mb="2vh">
          Our generation is constantly searching for a security that is just out
          of reach
        </Typography>
        <HomeStats />
        <Typography variant="h4" align="center" mb="2vh">
          put data points component here and arrow to continue
        </Typography>
      </BasicContainer>
    </Grid>
  </section>
);

export default forwardRef(HomeSection);
