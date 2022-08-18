import {
  AnimatePresence,
  motion,
  useScroll,
  useSpring,
  useTransform,
} from 'framer-motion';
import { useEffect, useState } from 'react';

const Car = ({ el }) => {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  });

  const { scrollYProgress } = useScroll({
    target: { current: el },
    offset: ['start end', 'end start'],
  });

  const x = useTransform(
    scrollYProgress,
    [0, 1],
    [-width + width / 2, width + width / 2]
  );

  const springedX = useSpring(x, { damping: 100 });

  return (
    <AnimatePresence>
      <motion.img
        key="car"
        style={{ x: springedX, y: '50vh' }}
        className="car"
        src="/assets/images/car.png"
        alt="Car"
        width="100px"
      />
      <div key="road" className="road" />
    </AnimatePresence>
  );
};

export default Car;
