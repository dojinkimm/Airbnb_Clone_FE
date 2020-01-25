import React, { useState } from 'react';
import { useStyles, stepperStyles } from './style';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import {
  FormStepOne,
  FormStepTwo,
  FormStepThree,
  FormHeader
} from 'src/components';
import Paper from '@material-ui/core/Paper';
import { MuiThemeProvider } from '@material-ui/core/styles';

function getSteps() {
  return [
    '1단계: 기본 사항을 입력하세요',
    '2단계: 위치를 입력하세요',
    '3단계: 이미지를 업로드 하세요'
  ];
}

function getStepContent(step: number) {
  switch (step) {
    case 0:
      return <FormStepOne />;
    case 1:
      return <FormStepTwo />;
    case 2:
      return <FormStepThree />;
    default:
      throw new Error('Unknown step');
  }
}

export function UploadRoomUI(): React.ReactElement {
  const classes = useStyles();
  const [activeStep, setActiveStep] = useState(0);
  const steps = getSteps();

  const handleNext = () => {
    setActiveStep(activeStep + 1);
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  return (
    <React.Fragment>
      <FormHeader />

      <main className={classes.layout}>
        <Paper className={classes.paper}>
          <MuiThemeProvider theme={stepperStyles}>
            <Stepper activeStep={activeStep} className={classes.stepper}>
              {steps.map(label => (
                <Step key={label} className={classes.stepItem}>
                  <StepLabel>{label}</StepLabel>
                </Step>
              ))}
            </Stepper>
          </MuiThemeProvider>
          <React.Fragment>
            {getStepContent(activeStep)}
            <div className={classes.buttons}>
              {activeStep !== 0 && (
                <Button onClick={handleBack} className={classes.buttonBack}>
                  뒤로
                </Button>
              )}
              <Button
                variant="contained"
                onClick={handleNext}
                disabled={activeStep === steps.length - 1 ? true : false}
                className={classes.buttonGo}
              >
                {activeStep === steps.length - 1 ? '완료' : '다음'}
              </Button>
            </div>
          </React.Fragment>
        </Paper>
      </main>
    </React.Fragment>
  );
}
