import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme => ({
  card: {
    height: '30vh',
    width: '20vw'
    // maxHeight: '50vh',
    // maxWidth: '30vw',
    // marginLeft: '15vw',
    // marginTop: '5vh'
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3)
  },
  submit: {
    margin: theme.spacing(3, 0, 2)
  }
}));
