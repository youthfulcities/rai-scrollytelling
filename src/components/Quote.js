/* COMPONENT BASED ON FIGMA WIREFRAMES

          "Young peoples' inability to afford to live in urban areas can have many 
          compounding negative effects, including increased mental health concerns, as 
          they face fears of missing out on life ahead and attaining their goals and ambitions."

          - Mark Beckles
          Vice-President, Social Innovation and Impact, RBC

          2 to 3 parts of different text to render

*/

import { Grid, Typography } from '@mui/material';

const Quote = () => (
  <Grid
    container
    justifyContent="center"
    alignItems="center"
    direction="row"
    spacing="1vh">
    <Grid item>
      <Typography color="#FFF" variant="h4" align="left" mb="2vh">
        &quot;Young peoples&apos; inability to afford to live in urban areas can
        have many compounding negative effects, including increased mental
        health concerns, as they face fears of missing out on life ahead and
        attaining their goals and ambitions.&quot;
      </Typography>
    </Grid>
  </Grid>
);

export default Quote;
