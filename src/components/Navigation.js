import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { Box, IconButton, Step, StepLabel, Stepper } from '@mui/material';
import React, { useState } from 'react';

const ScrollBar = () => {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      title: 'Home',
      description: '',
    },
    {
      title: 'Chapter 1',
      description: '',
    },
    {
      title: 'Chapter 2',
      description: '',
    },
    {
      title: 'Chapter 3',
      description: '',
    },
    {
      title: 'Chapter 4',
      description: '',
    },
    {
      title: 'Chapter 5',
      description: '',
    },
    {
      title: 'Conclusion',
      description: '',
    },
  ];

  const handleNext = () => {
    setActiveStep((prevActiveStep) =>
      prevActiveStep < steps.length - 1 ? prevActiveStep + 1 : steps.length - 1
    );
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) =>
      prevActiveStep !== 0 ? prevActiveStep - 1 : 0
    );
  };

  return (
    <Box sx={{ position: 'fixed', left: '25px', top: '20vh', minWidth: 0 }}>
      <IconButton onClick={handleBack}>
        <KeyboardArrowUpIcon />
      </IconButton>
      <Stepper
        orientation="vertical"
        steps={7}
        position="fixed"
        activeStep={activeStep}
        sx={{
          zIndex: 10,
        }}>
        {steps.map((step, i) => (
          <Step
            sx={{
              cursor: 'pointer',
            }}
            key={step.title}
            onClick={() => setActiveStep(i)}>
            <StepLabel>{step.title}</StepLabel>
          </Step>
        ))}
      </Stepper>
      <IconButton onClick={handleNext}>
        <KeyboardArrowDownIcon />
      </IconButton>
    </Box>
  );
};

export default ScrollBar;
