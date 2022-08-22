import { Grid, Typography, useMediaQuery, useTheme } from '@mui/material';
import React, { forwardRef } from 'react';
import BasicContainer from '../components/BasicContainer';

const HomeSection = (props, ref) => {
  const theme = useTheme();
  const smallScreen = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <section ref={ref} id="home">
      <Grid
        container
        sx={{
          minHeight: '100vh',
          backgroundColor: 'var(--green)',
          background:
            'linear-gradient(180deg, rgba(184,217,141,1) 0%, rgba(184,217,141,1) 20%, rgba(184,217,141,1) 80%, rgba(214,217,177,1) 100%)',
        }}>
        <BasicContainer inView>
          <Typography
            variant="h1"
            align="center"
            mb={6}
            mt={smallScreen ? 0 : '-15vh'}>
            Our generation is constantly searching for a security that is just
            out of reach
          </Typography>
          <Typography variant="body1">
            The high education and living costs in Canadian cities prior to the
            pandemic already made it difficult for young people to afford extra
            costs on top of their basic needs.
          </Typography>
          <Typography variant="body1">
            In the aftermath of the pandemic, young people are struggling more
            than before.
          </Typography>
          <Typography variant="body1" sx={{ minWidth: '100%' }}>
            This interactive multimedia story examines the impacts of
            affordability in cities across Canada and the challenges young
            people face as they strive to meet societal expectations, experience
            joy and find meaning in an unaffordable time.
          </Typography>
        </BasicContainer>
      </Grid>
    </section>
  );
};

export default forwardRef(HomeSection);
