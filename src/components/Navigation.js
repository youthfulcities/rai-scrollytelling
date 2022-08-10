import { Box, Step, StepLabel, Stepper } from '@mui/material';
import React from 'react';
import NextSection from './NextSection';

const ScrollBar = ({
  currentSection,
  setCurrentSection,
  handleScroll,
  homeEl,
  chap1El,
  chap2El,
  chap3El,
  chap4El,
  chap5El,
  conclusionEl,
  chap1InView,
  homeInView,
}) => {
  const steps = [
    {
      title: 'Home',
      description: '',
      element: homeEl,
    },
    {
      title: 'Chapter 1',
      description: '',
      element: chap1El,
    },
    {
      title: 'Chapter 2',
      description: '',
      element: chap2El,
    },
    {
      title: 'Chapter 3',
      description: '',
      element: chap3El,
    },
    {
      title: 'Chapter 4',
      description: '',
      element: chap4El,
    },
    {
      title: 'Chapter 5',
      description: '',
      element: chap5El,
    },
    {
      title: 'Conclusion',
      description: '',
      element: conclusionEl,
    },
  ];

  // const handleNext = () => {
  //   setCurrentSection((prevActiveStep) =>
  //     prevActiveStep < steps.length - 1 ? prevActiveStep + 1 : steps.length - 1
  //   );
  //   handleScroll(steps[currentSection + 1].element);
  // };

  // const handleBack = () => {
  //   setCurrentSection((prevActiveStep) =>
  //     prevActiveStep !== 0 ? prevActiveStep - 1 : 0
  //   );
  //   handleScroll(steps[currentSection - 1].element);
  // };

  return (
    <>
      <Box sx={{ position: 'fixed', left: '25px', top: '20vh', minWidth: 0 }}>
        <Stepper
          orientation="vertical"
          steps={7}
          position="fixed"
          activeStep={Math.floor(currentSection)}
          sx={{
            zIndex: 10,
          }}>
          {steps.map((step, i) => (
            <Step
              sx={{
                cursor: 'pointer',
                '&MuiStepIcon-text': {
                  display: 'none',
                },
              }}
              key={step.title}
              onClick={() => {
                setCurrentSection(i);
                handleScroll(step.element);
              }}>
              <StepLabel>{step.title}</StepLabel>
            </Step>
          ))}
        </Stepper>
      </Box>
      <NextSection
        el={steps[currentSection].element}
        homeInView={homeInView}
        chap1InView={chap1InView}
      />
    </>
  );
};

export default ScrollBar;
