import { Grid, Typography } from '@mui/material';
import { forwardRef } from 'react';
import BasicContainer from '../components/BasicContainer';
import HomeStats from '../components/HomeStats';

const HomeSection = (props, ref) => (
  <section ref={ref} id="home">
    <Grid container sx={{ minHeight: '100vh' }}>
      <BasicContainer>
        <Typography variant="h1" align="center" mb="2vh">
          Can Young People Afford to Live in Canadian Cities?
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
