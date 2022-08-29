import { Grid, Typography, useMediaQuery, useTheme } from '@mui/material';
import React, { forwardRef } from 'react';
import styled from "styled-components";
import BasicContainer from '../components/BasicContainer';

// import { Flex },Box, GridTemplate, Img, ScaleBox, StaggerWrap from '../ui';
// Container omitted
import Box from '../ui/Box';
import Flex from '../ui/Flex';
import GridTemplate from '../ui/GridTemplate';
import Img from '../ui/Img';
import ScaleBox from '../ui/ScaleBox';
import StaggerWrap from '../ui/StaggerWrap';

import picsList from "../PicsList";

const HomeSection = (props, ref) => {
  const theme = useTheme();
  const smallScreen = useMediaQuery(theme.breakpoints.down('md'));

const ProfilePic = styled(Img)`
  /* box-shadow: 0px 25px 50px rgba(0, 0, 0, 0.25); */
  box-shadow: 0px 24px 30px rgba(0, 0, 0, 0.2);
`;
ProfilePic.defaultProps = {
  borderRadius: 4,
  height: [40, null, 60, 80],
  width: [40, null, 60, 80]
};

function rand(min, max) {
  return Math.floor(Math.random() * (+max - +min)) + +min;
}

  return (
    <section ref={ref} id="home">
      <Grid container sx={{ minHeight: '100vh' }}>
        <BasicContainer inView>
          {/* <Box>  !! no closing tag */}
        <Flex
            flexDirection="column"
            minHeight={[580, 580, 750, 800]}
            height={"calc(100vh - 64px)"}
            justifyContent="center"
            alignItems="center"
          >
        <Box maxWidth={["auto", 400, 500, 800]} style={{ zIndex: 1 }}>
            <StaggerWrap childrenDelay={0.2} ease="backInOut">
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

<Flex justifyContent="center" style={{ overflowX: "hidden" }}>
<GridTemplate>
  {picsList.map((item, key) =>
    item !== null ? (
      <Box key={key} pt={key % 2 === 0 ? 4 : 0} textAlign="center">
        <ScaleBox duration={1} delayOrder={rand(1, 12)}>
          <ProfilePic src={item.src} alt="" />
        </ScaleBox>
      </Box>
    ) : (
      <Box />
    )
  )}
</GridTemplate>
</Flex>

          </StaggerWrap>
        </Box>
        </Flex>
        </BasicContainer>
      </Grid>
    </section>
  );
};

export default forwardRef(HomeSection);
