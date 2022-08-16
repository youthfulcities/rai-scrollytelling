import { Button, Grid, Link, Typography } from '@mui/material';
import { forwardRef } from 'react';
import BasicContainer from '../components/BasicContainer';

const Conclusion = ({ inView }, ref) => (
  <section ref={ref} id="conclusion">
    <Grid
      item
      container
      direction="column"
      alignItems="center"
      sx={{ minHeight: '100vh' }}
      justifyContent="center">
      <BasicContainer align="center" inView={inView}>
        <Typography variant="h2" align="center" mb="2vh">
          What now?
        </Typography>
        <Grid item mb={1}>
          <Button
            component={Link}
            href="https://thegrid.youthfulcities.com/explore/dataset/real-affordability-index-2022/table/?disjunctive.city&disjunctive.topic_en&disjunctive.measurement_en"
            target="_blank"
            rel="noreferrer"
            variant="contained"
            color="error"
            sx={{ color: '#000', padding: '14px 35px' }}>
            Explore the data
          </Button>
        </Grid>
        <Grid item mb={1}>
          <Button
            component={Link}
            href="https://youthfulcities.com/urban-indexes/rai-2022/#feedback"
            target="_blank"
            rel="noreferrer"
            variant="contained"
            color="error"
            sx={{ color: '#000', padding: '14px 35px' }}>
            Share your affordability story
          </Button>
        </Grid>
        <Grid item mb={1}>
          <Button
            component={Link}
            href="https://youthfulcities.us7.list-manage.com/subscribe?u=ad93cdfc178e6d9bc7646844f&id=453e06e908"
            target="_blank"
            rel="noreferrer"
            variant="contained"
            color="error"
            sx={{
              color: '#000',
              padding: '14px 35px',
              textAlign: 'center',
            }}>
            Be a part of future initiatives
          </Button>
        </Grid>
      </BasicContainer>
    </Grid>
  </section>
);

export default forwardRef(Conclusion);
