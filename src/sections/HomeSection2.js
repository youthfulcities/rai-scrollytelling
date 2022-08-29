import { Box, Grid, Typography, useMediaQuery, useTheme } from '@mui/material';
import { motion } from 'framer-motion';
import React, { forwardRef } from 'react';
import BasicContainer from '../components/BasicContainer';
import FadeInUp from '../components/FadeInUp';

// import { Flex },Box, GridTemplate, Img, ScaleBox, StaggerWrap from '../ui';
// Container omitted

const HomeSection = (props, ref) => {
  const theme = useTheme();
  const smallScreen = useMediaQuery(theme.breakpoints.down('md'));

  // const ProfilePic = styled(Img)`
  //   /* box-shadow: 0px 25px 50px rgba(0, 0, 0, 0.25); */
  //   box-shadow: 0px 24px 30px rgba(0, 0, 0, 0.2);
  // `;
  // ProfilePic.defaultProps = {
  //   borderRadius: 4,
  //   height: [40, null, 60, 80],
  //   width: [40, null, 60, 80],
  // };

  // function rand(min, max) {
  //   return Math.floor(Math.random() * (+max - +min)) + +min;
  // }

  return (
    <section ref={ref} id="home">
      <Grid
        container
        sx={{
          minHeight: '100vh',
          backgroundColor: 'var(--green)',
          overflowX: 'hidden',
          overflowY: 'hidden',
          background:
            'linear-gradient(180deg, rgba(184,217,141,1) 0%, rgba(184,217,141,1) 20%, rgba(184,217,141,1) 80%, rgba(214,217,177,1) 100%)',
        }}>
        <BasicContainer inView>
          <Box sx={{ zIndex: 3 }}>
            <Typography
              variant="h1"
              align="center"
              mb={6}
              mt={smallScreen ? 0 : '-15vh'}>
              Our generation is constantly searching for a security that is just
              out of reach
            </Typography>
            <Typography variant="body1">
              The high education and living costs in Canadian cities prior to
              the pandemic already made it difficult for young people to afford
              extra costs on top of their basic needs.
            </Typography>
            <Typography variant="body1">
              In the aftermath of the pandemic, young people are struggling more
              than before.
            </Typography>
            <Typography variant="body1" sx={{ minWidth: '100%' }}>
              This interactive multimedia story examines the impacts of
              affordability in cities across Canada and the challenges young
              people face as they strive to meet societal expectations,
              experience joy and find meaning in an unaffordable time.
            </Typography>
          </Box>
          <FadeInUp delay={2} y={-700}>
            <motion.div
              initial={{ x: '140%' }}
              style={{
                backgroundColor: 'var(--yellow)',
                width: '300px',
                height: '300px',
                borderRadius: '50%',
                position: 'absolute',
                zIndex: '0',
              }}
            />
          </FadeInUp>
          <FadeInUp delay={3} y={-600}>
            <motion.div
              initial={{ x: '-50%' }}
              style={{
                backgroundColor: 'var(--pink)',
                width: '600px',
                height: '600px',
                borderRadius: '50%',
                position: 'absolute',
                zIndex: '0',
              }}
            />
          </FadeInUp>
        </BasicContainer>
      </Grid>
    </section>
  );
};

export default forwardRef(HomeSection);
