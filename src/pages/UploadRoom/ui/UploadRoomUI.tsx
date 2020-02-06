import React, { useState, useContext } from 'react';
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
import {
  BasicFormState,
  BasicFormDispatch,
  AddressFormState,
  AddressFormDispatch,
  ImageFormState,
  ImageFormDispatch,
  SubmitDispatch
} from '../store';


function getSteps() {
  return [
    '1단계: 기본 사항을 입력하세요',
    '2단계: 위치를 입력하세요',
    '3단계: 이미지를 업로드 하세요'
  ];
}

function getStepContent(step: number, basicForm: any, addressForm: any, imageForm: any) {
  switch (step) {
    case 0:
      return <FormStepOne FormInputs={basicForm} />;
    case 1:
      return <FormStepTwo FormInputs={addressForm} />;
    case 2:
      return <FormStepThree FormInputs={imageForm}/>;

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

  const basicFormState = useContext(BasicFormState);
  const basicFormDispatcher = useContext(BasicFormDispatch);
  const addressFormState = useContext(AddressFormState);
  const addressFormDispatcher = useContext(AddressFormDispatch);
  const imageFromState = useContext(ImageFormState);
  const imageFormDispatcher = useContext(ImageFormDispatch);


  const setSubmit = useContext(SubmitDispatch);
  const basicFormHandler = {
    name: {
      onChange: (e: React.ChangeEvent<HTMLInputElement>): void => {
        const value = e.target.value;
        basicFormDispatcher({
          type: 'name',
          value: value
        });
      }
    },
    capacity: {
      onChange: (e: React.ChangeEvent<HTMLInputElement>): void => {
        const value = Number(e.target.value);
        basicFormDispatcher({
          type: 'capacity',
          value: value
        });
      }
    },
    bedroom: {
      onChange: (e: React.ChangeEvent<HTMLInputElement>): void => {
        const value = Number(e.target.value);

        basicFormDispatcher({
          type: 'bedroom',
          value: value
        });
      }
    },
    bed: {
      onChange: (e: React.ChangeEvent<HTMLInputElement>): void => {
        const value = Number(e.target.value);

        basicFormDispatcher({
          type: 'bed',
          value: value
        });
      }
    },
    bath: {
      onChange: (e: React.ChangeEvent<HTMLInputElement>): void => {
        const value = Number(e.target.value);

        basicFormDispatcher({
          type: 'bath',
          value: value
        });
      }
    },
    priceSlider: {
      value:
        typeof basicFormState.price === 'number' ? basicFormState.price : 0,
      onChange: (e: any, newValue: number): void => {
        const value = newValue;
        basicFormDispatcher({
          type: 'price',
          value: value
        });
      }
    },
    priceInput: {
      value: basicFormState.price,
      onChange: (e: React.ChangeEvent<HTMLInputElement>): void => {
        const value = e.target.value === '' ? '' : Number(e.target.value);
        basicFormDispatcher({
          type: 'price',
          value: value
        });
      }
    },
    checkin: {
      onChange: (e: React.ChangeEvent<HTMLInputElement>): void => {
        const value = e.target.value;
        basicFormDispatcher({
          type: 'checkin',
          value: value
        });
      }
    },
    checkout: {
      onChange: (e: React.ChangeEvent<HTMLInputElement>): void => {
        const value = e.target.value;
        basicFormDispatcher({
          type: 'checkout',
          value: value
        });
      }
    },
    houseType: {
      value: basicFormState.houseType,
      onChange: (e: React.ChangeEvent<HTMLInputElement>): void => {
        const value = e.target.value;
        basicFormDispatcher({
          type: 'houseType',
          value: value
        });
      }
    },
    convenience: {
      wifi: {
        onChange: (e: React.ChangeEvent<HTMLInputElement>): void => {
          basicFormState.convenience.wifi = !basicFormState.convenience.wifi;
          basicFormDispatcher({
            type: 'convenience',
            value: { ...basicFormState.convenience }
          });
        }
      },
      parking: {
        onChange: (e: React.ChangeEvent<HTMLInputElement>): void => {
          basicFormState.convenience.parking = !basicFormState.convenience
            .parking;
          basicFormDispatcher({
            type: 'convenience',
            value: { ...basicFormState.convenience }
          });
        }
      },
      kitchen: {
        onChange: (e: React.ChangeEvent<HTMLInputElement>): void => {
          basicFormState.convenience.kitchen = !basicFormState.convenience
            .kitchen;
          basicFormDispatcher({
            type: 'convenience',
            value: { ...basicFormState.convenience }
          });
        }
      },
      breakfast: {
        onChange: (e: React.ChangeEvent<HTMLInputElement>): void => {
          basicFormState.convenience.breakfast = !basicFormState.convenience
            .breakfast;
          basicFormDispatcher({
            type: 'convenience',
            value: { ...basicFormState.convenience }
          });
        }
      },
      tv: {
        onChange: (e: React.ChangeEvent<HTMLInputElement>): void => {
          basicFormState.convenience.tv = !basicFormState.convenience.tv;
          basicFormDispatcher({
            type: 'convenience',
            value: { ...basicFormState.convenience }
          });
        }
      },
      laundry: {
        onChange: (e: React.ChangeEvent<HTMLInputElement>): void => {
          basicFormState.convenience.laundry = !basicFormState.convenience
            .laundry;
          basicFormDispatcher({
            type: 'convenience',
            value: { ...basicFormState.convenience }
          });
        }
      },
      ac: {
        onChange: (e: React.ChangeEvent<HTMLInputElement>): void => {
          basicFormState.convenience.ac = !basicFormState.convenience.ac;
          basicFormDispatcher({
            type: 'convenience',
            value: { ...basicFormState.convenience }
          });
        }
      }
    }
  };

  const addressFormHandler = {
    country: {
      value: addressFormState.country,
      onChange: (e: React.ChangeEvent<HTMLInputElement>): void => {
        const value = e.target.value;
        addressFormDispatcher({
          type: 'country',
          value: value
        });
      }
    },
    city: {
      onChange: (e: React.ChangeEvent<HTMLInputElement>): void => {
        const value = e.target.value;
        addressFormDispatcher({
          type: 'city',
          value: value
        });
      }
    },
    address: {
      onChange: (e: React.ChangeEvent<HTMLInputElement>): void => {
        const value = e.target.value;
        addressFormDispatcher({
          type: 'address',
          value: value
        });
      }
    },
    street1: {
      onChange: (e: React.ChangeEvent<HTMLInputElement>): void => {
        const value = e.target.value;
        addressFormDispatcher({
          type: 'street1',
          value: value
        });
      }
    },
    street2: {
      onChange: (e: React.ChangeEvent<HTMLInputElement>): void => {
        const value = e.target.value;
        addressFormDispatcher({
          type: 'street2',
          value: value
        });
      }
    }
  };

  const imageFormHandler = {
    imageHandler: {
      onChange: (e: React.ChangeEvent<HTMLInputElement>): void => {
        if (!e || e.target.files === null) return;
        imageFormDispatcher({
          type: 'imagePreview',
          value: [...imageFromState.imagePreview, URL.createObjectURL(e.target.files[0])]
        });
        imageFormDispatcher({
          type: 'imageFile',
          // value: e.target.files
          value: [...imageFromState.imageFile, e.target.files[0]]
        });
      }
    },
    imageView: imageFromState.imagePreview
  };

  const onSubmit = (): void => setSubmit(true);

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

          <form onSubmit={onSubmit} noValidate>
            {getStepContent(activeStep, basicFormHandler, addressFormHandler, imageFormHandler)}
            <div className={classes.buttons}>
              {activeStep !== 0 && (
                <Button onClick={handleBack} className={classes.buttonBack}>
                  뒤로
                </Button>
              )}
              {activeStep === steps.length - 1 ? (
                <Button
                  onClick={onSubmit}
                  variant="contained"
                  className={classes.buttonGo}
                >
                  완료
                </Button>
              ) : (
                <Button
                  type="button"
                  variant="contained"
                  onClick={handleNext}
                  className={classes.buttonGo}
                >
                  다음
                </Button>
              )}
            </div>
          </form>
        </Paper>
      </main>
    </React.Fragment>
  );
}
