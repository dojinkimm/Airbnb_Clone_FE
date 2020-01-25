import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme => ({
  card: {
    height: '35vh',
    width: '20vw',
    overflow: 'visible',
  },
  cardHeader:{
    width: '80%',
    marginLeft: '10%'
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    overflow: 'visible'
  },
  button:{
    width: '100%',
    marginTop: '1.5rem',
    backgroundColor: '#FF5A5F',
    color: '#FFFFFF'
  }
}));
