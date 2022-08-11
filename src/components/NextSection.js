import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { Grid, IconButton, Typography } from '@mui/material';
import { AnimatePresence, motion } from 'framer-motion';
import React from 'react';

const NextSection = ({ el, homeInView = true }) => {
  const handleScroll = (element) =>
    element.nextElementSibling.scrollIntoView({ behavior: 'smooth' });

  console.log(el);

  return (
    <AnimatePresence>
      <Grid
        component={motion.div}
        container
        sx={{
          zIndex: 100,
          height: 0,
          justifyContent: homeInView ? 'center' : 'flex-end',
          position: homeInView ? 'relative' : 'fixed',
          top: homeInView ? '79vh' : 25,
          right: homeInView ? 0 : 50,
        }}
        direction="row"
        justifyContent="center">
        <Grid item>
          <Grid
            container
            direction="column"
            justifyContent="center"
            alignItems="center">
            {homeInView && (
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
                  handleScroll(el);
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
