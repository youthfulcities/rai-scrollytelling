import { motion } from 'framer-motion';

import React from 'react';

const FadeInUp = ({ inView, children }) => {
  const easing = [0.42, 0, 0.58, 1];
  const yOffset = 24;
  const delay = 0;
  const transition = { duration: 0.8, delay, ease: easing };
  const variants = {
    hidden: { y: yOffset, opacity: 0, transition },
    show: {
      y: 0,
      x: 0,
      opacity: 1,
      transition,
    },
  };

  return (
    <motion.div
      initial="hidden"
      animate={inView ? 'show' : 'hidden'}
      exit="hidden"
      variants={variants}>
      {children}
    </motion.div>
  );
};

export default FadeInUp;
