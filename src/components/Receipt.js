import { motion, useScroll, useSpring, useTransform } from 'framer-motion';
import { useEffect } from 'react';

const Receipt = ({ el }) => {
  const { scrollYProgress } = useScroll({
    target: { current: el },
    offset: ['start end', 'end start'],
  });

  const x = useTransform(
    scrollYProgress,
    [0, 1],
    [-window.innerWidth, window.innerWidth]
  );

  useEffect(() => {
    scrollYProgress.onChange((latest) => console.log(latest));
  }, [scrollYProgress]);

  const springedX = useSpring(x, { damping: 100 });

  return (
    <motion.div
      className="receipt"
      ease="backInOut"
      yOffset={64}
      duration={1}
    />
  );
};

export default Receipt;
