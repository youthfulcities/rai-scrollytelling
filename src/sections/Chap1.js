import { Grid, Typography } from '@mui/material';
import { forwardRef } from 'react';
import BasicContainer from '../components/BasicContainer';

const Chap1 = ({ el }, ref) => (
  <section id="chap1" ref={ref}>
    <Grid container sx={{ minHeight: '100vh', backgroundColor: '#F6D9D7' }}>
      <BasicContainer>
        <Typography variant="h2" align="center" mb="2vh">
          Chapter 1: In search of the next step
        </Typography>
      </BasicContainer>
    </Grid>
  </section>
);

export default forwardRef(Chap1);
