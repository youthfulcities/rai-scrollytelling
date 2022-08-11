import { Grid, Typography } from '@mui/material';
import { forwardRef } from 'react';
import BasicContainer from '../components/BasicContainer';

const Chap1 = (props, ref) => (
  <section id="chap1" ref={ref}>
    <Grid
      container
      sx={{ minHeight: '100vh', height: '100%', backgroundColor: '#F6D9D7' }}
      py="20vh">
      <BasicContainer>
        <Typography variant="h3" mb="2vh">
          Searching for next steps
        </Typography>
        <Typography variant="body1" mb="20vh">
          Imagine that you are a young person living through the pandemic who
          has been forced to decide whether you will continue living with your
          family, or move to an urban centre to pursue work or education
          opportunities amidst great uncertainty. The pandemic has complicated
          this path. With virtual learning and continuous lockdowns that disrupt
          work environments, you decide to take the opportunity to stay in your
          family home to work.
        </Typography>
        <Typography variant="body1" mb="20vh">
          By working a minimum wage job in your hometown, you become part of the
          35% of young people that are employed in the service sector. As a
          service worker, it is challenging to maintain employment because of
          the continuous lockdowns. During this time, youth unemployment was
          higher than during the Great Recession.
        </Typography>
        <Typography variant="body1" mb="20vh">
          Throughout the pandemic, 15 to 24 year olds were unemployed for an
          average of 12.6 weeks, the highest we have ever seen. As your hours
          decrease, you continue to experience the monthly deficit that predates
          the pandemic. Your minimum wage is not a liveable wage.
        </Typography>
        <Typography variant="h3" mb="2vh">
          By eventually moving to an urban centre, you will become part of the
          70% of Canadian youth that leaves rural areas for urban ones.
        </Typography>
        <Typography variant="body1">
          Young Canadians across the country experience a $2 and $10 gap between
          minimum and liveable wage, putting those who work in the service
          industry into a monthly deficit. Like many other young people
          experiencing a monthly deficit, you must make sacrifices to break
          even.
        </Typography>
      </BasicContainer>
    </Grid>
  </section>
);

export default forwardRef(Chap1);
