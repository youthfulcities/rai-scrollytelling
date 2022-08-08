import React, { useContext } from "react";

import { IntersectionContext } from "/IntersectionObserver.jsx";
import { MotionBox } from "/MotionBox.jsx";

export const StaggerContext = React.createContext({
  stagger: false
});

export const StaggerWrap = ({ children, delayOrder, childrenDelay, ease }) => {
  const { inView } = useContext(IntersectionContext);

  // const offset = 0.4;

  const variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        when: "beforeChildren",
        delay: delayOrder ? delayOrder : 0,
        staggerChildren: childrenDelay ? childrenDelay : 0.1
      }
    }
  };

  return (
    <StaggerContext.Provider value={{ stagger: true, ease }}>
      <MotionBox
        initial="hidden"
        animate={inView ? "show" : "hidden"}
        exit="hidden"
        variants={variants}
      >
        {children}
      </MotionBox>
    </StaggerContext.Provider>
  );
};