import { Grid, Typography, useMediaQuery, useTheme } from '@mui/material';
import React, { forwardRef } from 'react';
import BasicContainer from '../components/BasicContainer';

const HomeSection = (props, ref) => {
  const theme = useTheme();
  const smallScreen = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <section ref={ref} id="home">
      <Grid container sx={{ minHeight: '100vh' }}>
        <BasicContainer>
          <Typography
            variant="h1"
            align="center"
            mb={6}
            mt={smallScreen ? 0 : '-15vh'}>
            Our generation is constantly searching for a security that is just
            out of reach
          </Typography>
          <Typography variant="body2" mb={1}>
            As COVID19, social isolation and uncertainty plagued cities across
            Canada, young people tried to cope with a new reality at a time
            where they are coming of age. They changed their plans and were
            resilient, but it wasn’t enough.
          </Typography>
          <Typography variant="body2" mb={1}>
            The high cost of education and living in Canadian cities prior to
            the pandemic already made it difficult for young people to afford
            their basic needs.
          </Typography>
          <Typography variant="body2" mb={1} sx={{ minWidth: '100%' }}>
            In the aftermath of the pandemic, young people are struggling more
            than ever before.
          </Typography>
          <Typography variant="body2">
            This interactive multimedia story examines the impacts of
            affordability in cities across Canada and the real challenges young
            people face. As the story progresses, affordability is viewed from
            the perspective of not just providing the necessities for our young
            people but also the ability to afford what can bring them joy.
          </Typography>
        </BasicContainer>
      </Grid>
    </section>
  );
};

export default forwardRef(HomeSection);
