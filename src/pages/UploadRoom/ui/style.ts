import { makeStyles } from '@material-ui/core/styles';
import { createMuiTheme } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme => ({
      layout: {
        width: 'auto',
        marginLeft: theme.spacing(2),
        marginRight: theme.spacing(2),
        [theme.breakpoints.up(600 + theme.spacing(2) * 2)]: {
          width: 600,
          marginLeft: 'auto',
          marginRight: 'auto',
        },
      },
      paper: {
        marginTop: theme.spacing(3),
        marginBottom: theme.spacing(3),
        padding: theme.spacing(2),
        [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
          marginTop: theme.spacing(6),
          marginBottom: theme.spacing(6),
          padding: theme.spacing(3),
        },
      },
      stepper: {
        padding: theme.spacing(3, 0, 5),
      },
      stepItem:{
        // backgroundColor: '#FF5A5F',
        // color: '#FFFFFF'
      },
      buttons: {
        display: 'flex',
        justifyContent: 'flex-end',
      },
      buttonGo: {
        marginTop: theme.spacing(3),
        marginLeft: theme.spacing(1),
        backgroundColor: '#FF5A5F',
        color: '#FFFFFF'
      },
      buttonBack:{
        marginTop: theme.spacing(3),
        marginLeft: theme.spacing(1),
      }
}));


export const stepperStyles = createMuiTheme({
  overrides: {
      MuiStepIcon: {
          root: {
              '&$active': {
                  color: '#FF5A5F',
              },
              '&$completed': {
                  color: '#FF5A5F',
              },
          },
      },
  }
});

