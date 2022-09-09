import { Grid } from '@mui/material';
import { motion, useScroll, useTransform } from 'framer-motion';
import React from 'react';

const TorontoParallax = ({ el }) => {
  const { scrollYProgress } = useScroll({
    target: { current: el },
    offset: ['start end', 'end start'],
  });

  const y1 = useTransform(scrollYProgress, [0.3, 1], [0, 300]);
  const y2 = useTransform(scrollYProgress, [0.3, 1], [0, 200]);
  const y3 = useTransform(scrollYProgress, [0.3, 1], [0, 100]);
  const x1 = useTransform(scrollYProgress, [0.3, 1], [0, -50]);
  const x2 = useTransform(scrollYProgress, [0.3, 1], [0, 40]);

  return (
    <Grid
      container
      direction="column"
      justifyContent="flex-end"
      alignItems="stretch"
      sx={{
        width: '100%',
        position: 'relative',
        height: '50vh',
        overflowX: 'hidden',
        overflowY: 'hidden',
      }}>
      <motion.img
        style={{ y: y1, position: 'absolute' }}
        src="/assets/images/background.png"
        alt=""
        width="100%"
        height="100%"
      />
      <motion.img
        style={{ y: y2, x: x1, position: 'absolute' }}
        src="/assets/images/bgclouds.png"
        alt=""
        width="100%"
        height="100%"
      />
      <motion.img
        style={{ y: y3, position: 'absolute' }}
        src="/assets/images/foregroundclouds.png"
        alt=""
        width="100%"
        height="100%"
      />
      <motion.img
        style={{ position: 'absolute' }}
        src="/assets/images/buildings.png"
        alt=""
        width="100%"
        height="100%"
      />
    </Grid>
  );
};

export default TorontoParallax;
