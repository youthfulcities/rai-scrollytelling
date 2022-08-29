import { Grid } from '@mui/material';
import { motion, useScroll, useSpring, useTransform } from 'framer-motion';
import React from 'react';

const TransitPass = ({ el }) => {
  console.log(el);
  const { scrollYProgress } = useScroll({
    target: { current: el },
    offset: ['start end', 'end start'],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.8]);

  const y = useTransform(scrollYProgress, [0, 1], [-50, 400]);

  const springedScale = useSpring(scale, { damping: 10 });
  const springedY = useSpring(y, { damping: 10 });

  return (
    <Grid
      container
      sx={{
        position: 'relative',
        height: '100%',
        width: '100%',
        overflow: 'hidden',
      }}
      pb={80}>
      <img
        style={{ position: 'absolute', top: 0, width: '100%' }}
        src="/assets/images/machine.png"
        alt="transit pass slot"
      />
      <motion.img
        // animate={{ scale: springedScale, y: springedY }}
        transition={{ duration: 1.5 }}
        style={{
          scale: springedScale,
          y: springedY,
          position: 'absolute',
          top: 0,
          width: '100%',
        }}
        src="/assets/images/transitpass.png"
        alt="transit pass for Toronto"
      />
    </Grid>
  );
};

export default TransitPass;
