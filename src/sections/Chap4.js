import { Grid, Typography } from '@mui/material';
import { forwardRef } from 'react';
import BasicContainer from '../components/BasicContainer';

const Chap4 = (props, ref) => (
  <section ref={ref} id="chap4">
    <Grid
      container
      sx={{ minHeight: '100vh', backgroundColor: '#F2695D' }}
      justifyContent="center">
      <BasicContainer>
        <Typography variant="h2" align="center" mb="2vh">
          Chapter 4: In search of skills
        </Typography>
      </BasicContainer>
    </Grid>
  </section>
);

export default forwardRef(Chap4);
