import { Grid, Typography } from '@mui/material';
import { forwardRef } from 'react';
import BasicContainer from '../components/BasicContainer';

const Conclusion = (props, ref) => (
  <section ref={ref} id="conclusion">
    <Grid
      item
      container
      direction="column"
      alignItems="center"
      sx={{ minHeight: '100vh' }}
      justifyContent="center">
      <BasicContainer>
        <Typography variant="h2" align="center" mb="2vh">
          Conclusion
        </Typography>
      </BasicContainer>
    </Grid>
  </section>
);

export default forwardRef(Conclusion);
