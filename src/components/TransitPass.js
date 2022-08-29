import { Grid } from '@mui/material';
import { motion } from 'framer-motion';
import React from 'react';

const TransitPass = ({ inView = true }) => (
  <Grid
    container
    sx={{
      position: 'relative',
      height: '100%',
      width: '100%',
      overflowX: 'hidden',
    }}
    pb={80}>
    <img
      style={{ position: 'absolute', top: 0, width: '100%' }}
      src="/assets/images/machine.png"
      alt="transit pass slot"
    />
    <motion.img
      animate={inView ? { scale: 2, y: 200 } : { scale: 1, y: 0 }}
      transition={{ duration: 1.5 }}
      style={{ position: 'absolute', top: 0, width: '100%' }}
      src="/assets/images/transitpass.png"
      alt="transit pass for Toronto"
    />
  </Grid>
);

export default TransitPass;
