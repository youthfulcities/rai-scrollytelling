import { Grid, Typography } from '@mui/material';
import React from 'react';
import BasicContainer from '../components/BasicContainer';

const Conclusion = () => (
  <div>
    <Grid
      item
      container
      direction="column"
      alignItems="center"
      sx={{ minHeight: '100vh' }}
      justifyContent="center">
      <BasicContainer width="md">
        <Typography variant="h2" align="center" mb="2vh">
          Conclusion
        </Typography>
      </BasicContainer>
    </Grid>
  </div>
);

export default Conclusion;
