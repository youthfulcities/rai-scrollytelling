import { Grid, Typography } from '@mui/material';
import { forwardRef } from 'react';
import BasicContainer from '../components/BasicContainer';

const Chap5 = (props, ref) => (
  <section ref={ref} id="chap5">
    <Grid container sx={{ minHeight: '100vh', backgroundColor: '#253D88' }}>
      <BasicContainer>
        <Typography variant="h2" color="#fff" align="center" mb="2vh">
          Chapter 5: In search of fulfillment
        </Typography>
      </BasicContainer>
    </Grid>
  </section>
);

export default forwardRef(Chap5);
