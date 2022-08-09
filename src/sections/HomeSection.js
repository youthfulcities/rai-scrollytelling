import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { Grid, IconButton, Typography } from '@mui/material';
import React, { forwardRef } from 'react';
import BasicContainer from '../components/BasicContainer';
import HomeStats from '../components/HomeStats';

const HomeSection = ({ handleScroll, chap1El }, ref) => (
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
        <Grid item>
          <IconButton onClick={() => handleScroll(chap1El)}>
            <KeyboardArrowDownIcon sx={{ fontSize: '80px' }} />
          </IconButton>
        </Grid>
      </BasicContainer>
    </Grid>
  </section>
);

export default forwardRef(HomeSection);
