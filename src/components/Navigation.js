import {
  Box,
  Step,
  StepLabel,
  Stepper,
  Typography,
  useMediaQuery,
} from '@mui/material';
import { useTheme } from '@mui/material/styles';
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
  const theme = useTheme();
  const smallScreen = useMediaQuery(theme.breakpoints.down('md'));

  const steps = [
    {
      title: 'Home',
      description: '',
      element: homeEl,
    },
    {
      title: 'Chapter 1',
      description: 'Searching',
      element: chap1El,
    },
    {
      title: 'Chapter 2',
      description: 'Tbd',
      element: chap2El,
    },
    {
      title: 'Chapter 3',
      description: 'Tbd',
      element: chap3El,
    },
    {
      title: 'Chapter 4',
      description: 'Tbd',
      element: chap4El,
    },
    {
      title: 'Chapter 5',
      description: 'Tbd',
      element: chap5El,
    },
    {
      title: 'Conclusion',
      description: '',
      element: conclusionEl,
    },
  ];

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
              <StepLabel
                optional={
                  !smallScreen ? (
                    <Typography variant="caption">
                      {step.description}
                    </Typography>
                  ) : null
                }>
                {!smallScreen && step.title}
              </StepLabel>
            </Step>
          ))}
        </Stepper>
      </Box>
      {!smallScreen && (
        <NextSection
          el={steps[currentSection].element}
          homeInView={homeInView}
          chap1InView={chap1InView}
        />
      )}
    </>
  );
};

export default ScrollBar;
