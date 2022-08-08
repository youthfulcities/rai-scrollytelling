import { Grid, Typography } from '@mui/material';
import React from 'react';
import BasicContainer from '../components/BasicContainer';

const Chap3 = () => (
  <div>
    <Grid container sx={{ minHeight: '100vh', backgroundColor: '#B8D98D' }}>
      <BasicContainer>
        <Typography variant="h2" align="center" mb="2vh">
          Chapter 3: In search of basic needs
        </Typography>
        <Grid item>
          <Typography variant="h5" align="center" mb="2vh">
            Women pay more on certain products than men and often experience a
            greater deficit
          </Typography>
        </Grid>
        {/* CostOfProducts Component Goes Here! */}
      </BasicContainer>
    </Grid>
  </div>
);

export default Chap3;
