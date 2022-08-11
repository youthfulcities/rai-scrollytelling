import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { Grid, IconButton } from '@mui/material';
import { AnimatePresence, motion } from 'framer-motion';
import React, { useEffect, useState } from 'react';

const NextSection = ({ el, homeInView = true, chap1InView = false }) => {
  const [corner, setCorner] = useState(false);

  useEffect(() => {
    if (!homeInView) {
      setCorner(true);
    }
  }, [homeInView]);

  const handleScroll = (element) => {
    console.log(element.nextElementSibling);
    return element.nextElementSibling.scrollIntoView({ behavior: 'smooth' });
  };

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
          top: homeInView ? '75vh' : 25,
          right: homeInView ? 0 : 50,
        }}
        direction="row"
        justifyContent="center">
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
    </AnimatePresence>
  );
};

export default NextSection;
