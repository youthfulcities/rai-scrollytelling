import { motion, useScroll, useSpring, useTransform } from 'framer-motion';
import { useEffect, useState } from 'react';

const Car = ({ el }) => {
  const [width, setWidth] = useState(1);

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

  const x = useTransform(scrollYProgress, [0, 1], [-width, width]);

  useEffect(() => {
    scrollYProgress.onChange((latest) => console.log(latest));
  }, [scrollYProgress]);

  const springedX = useSpring(x, { damping: 100 });

  return (
    <>
      <motion.img
        style={{ x: springedX }}
        className="car"
        src="/assets/images/car.png"
        alt="Car"
        width="100px"
      />
      <div className="road" />
    </>
  );
};

export default Car;
