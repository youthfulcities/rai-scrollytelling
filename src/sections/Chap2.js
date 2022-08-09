import { Grid, Typography } from '@mui/material';
import { forwardRef } from 'react';
import BasicContainer from '../components/BasicContainer';

const Chap2 = (props, ref) => (
  <section id="chap2" ref={ref}>
    <Grid container sx={{ minHeight: '100vh', backgroundColor: '#FBD166' }}>
      <BasicContainer>
        <Typography variant="h2" align="center" mb="2vh">
          Chapter 2: In search of employment
        </Typography>
      </BasicContainer>
    </Grid>
  </section>
);

export default forwardRef(Chap2);
