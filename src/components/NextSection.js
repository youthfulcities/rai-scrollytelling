import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { Grid, IconButton, Typography, useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { AnimatePresence, motion } from 'framer-motion';
import React from 'react';

const NextSection = ({ el, currentEl, homeInView = true }) => {
  const theme = useTheme();
  const smallScreen = useMediaQuery(theme.breakpoints.down('md'));

  const handleScroll = (element) => {
    console.log(element.nextElementSibling);
    element.nextElementSibling.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <AnimatePresence>
      <Grid
        component={motion.div}
        container
        sx={{
          zIndex: 100,
          height: 0,
          justifyContent: homeInView && !smallScreen ? 'center' : 'flex-end',
          position: homeInView && !smallScreen ? 'relative' : 'fixed',
          top: homeInView && !smallScreen ? '79vh' : 25,
          right: homeInView && !smallScreen ? 0 : 20,
        }}
        direction="row"
        justifyContent="center">
        <Grid item>
          <Grid
            container
            direction="column"
            justifyContent="center"
            alignItems="center">
            {homeInView && !smallScreen && (
              <Grid item>
                <Typography
                  component={motion.h4}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  end={{ opacity: 0 }}
                  variant="h4"
                  textAlign="center"
                  sx={{ transform: 'translate(0, 20px)' }}>
                  Start your journey
                </Typography>
              </Grid>
            )}
            <Grid item>
              <IconButton
                key="home-button"
                layout
                component={motion.button}
                whileHover={{
                  y: [0, 10, 0],
                  transition: {
                    repeat: Infinity,
                    repeatDelay: 0.3,
                  },
                }}
                transition={{ duration: 0.8 }}
                onClick={() => {
                  handleScroll(currentEl);
                }}>
                <KeyboardArrowDownIcon sx={{ fontSize: '80px' }} />
              </IconButton>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </AnimatePresence>
  );
};

export default NextSection;
