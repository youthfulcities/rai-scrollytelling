import React, { useContext } from 'react';

import { IntersectionContext } from './IntersectionObserver';
import MotionBox from './MotionBox';

export const StaggerContext = React.createContext({
  stagger: false,
});

const StaggerWrap = ({ children, delayOrder, childrenDelay, ease }) => {
  const { inView } = useContext(IntersectionContext);

  // const offset = 0.4;

  const variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        when: 'beforeChildren',
        delay: delayOrder || 0,
        staggerChildren: childrenDelay || 0.1,
      },
    },
  };

  return (
    // ease apparently changes every render, may need to use useMemo or something
    <StaggerContext.Provider value={{ stagger: true, ease }}>
      <MotionBox
        initial="hidden"
        animate={inView ? 'show' : 'hidden'}
        exit="hidden"
        variants={variants}>
        {children}
      </MotionBox>
    </StaggerContext.Provider>
  );
};

export default StaggerWrap;
