import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme => ({
  card: {
    height: '50vh',
    width: '20vw',
    overflow: 'visible'
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
    overflow: 'visible'
  },
  submit: {
    margin: theme.spacing(3, 0, 2)
  }
}));
