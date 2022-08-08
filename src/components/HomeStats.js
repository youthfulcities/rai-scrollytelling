/* THIS IS MEANT TO BE THE FIRST HOME PAGE DATA POINTS */

import { Grid, Typography } from '@mui/material';

const HomeStats = () => (
  <Grid
    my={3}
    container
    direction="column"
    justifyContent="space-between"
    alignItems="center">
    <Grid item>
      <Typography variant="h2" align="center" mb="2vh">
        Data points here!
      </Typography>
    </Grid>
  </Grid>
);

export default HomeStats;
