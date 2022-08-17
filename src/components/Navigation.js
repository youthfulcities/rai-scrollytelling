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
  currentEl,
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
      description: 'Next Steps',
      element: chap1El,
    },
    {
      title: 'Chapter 2',
      description: 'Work',
      element: chap2El,
    },
    {
      title: 'Chapter 3',
      description: 'Balance',
      element: chap3El,
    },
    {
      title: 'Chapter 4',
      description: 'Skills',
      element: chap4El,
    },
    {
      title: 'Chapter 5',
      description: 'Security',
      element: chap5El,
    },
    {
      title: 'What now?',
      description: '',
      element: conclusionEl,
    },
  ];

  return (
    <>
      <Box
        sx={{
          position: 'fixed',
          left: '25px',
          top: '20vh',
          minWidth: 0,
        }}>
        <Stepper
          orientation="vertical"
          steps={7}
          position="fixed"
          activeStep={currentSection}
          sx={{
            zIndex: 10,
          }}>
          {steps.map((step, i) => (
            <Step
              sx={{
                cursor: 'pointer',
                color: '#fff',
                '&:disabled': {
                  cursor: 'pointer',
                },
              }}
              key={step.title}
              onClick={() => {
                setCurrentSection(i);
                handleScroll(step.element);
              }}>
              <StepLabel
                sx={{
                  '&:hover': { cursor: 'pointer' },
                  '&.Mui-completed': {
                    backgroundColor: '#fff',
                  },
                }}
                StepIconProps={{
                  icon: '',
                  sx: {
                    '&.Mui-completed': {
                      color: currentSection > 4 ? '#5164a0' : '#253D88',
                    },
                    '&.Mui-active': {
                      color: currentSection > 4 ? '#5164a0' : '#253D88',
                    },
                  },
                }}
                optional={
                  !smallScreen ? (
                    <Typography
                      variant="caption"
                      color={currentSection > 4 ? '#fff' : '#000'}>
                      {step.description}
                    </Typography>
                  ) : null
                }>
                {!smallScreen && (
                  <Typography
                    variant="body2"
                    color={currentSection > 4 ? '#fff' : '#000'}>
                    {step.title}
                  </Typography>
                )}
              </StepLabel>
            </Step>
          ))}
        </Stepper>
      </Box>
      <NextSection
        homeInView={homeInView}
        chap1InView={chap1InView}
        currentEl={currentEl}
      />
    </>
  );
};

export default ScrollBar;
