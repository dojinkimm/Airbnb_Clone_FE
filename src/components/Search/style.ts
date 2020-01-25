import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme => ({
  card: {
    maxHeight: '50vh',
    maxWidth: '20vw',
    marginLeft: '15vw',
    marginTop: '5vh',
    overflow: 'visible'
  },
  cardHeader:{
    width: '80%',
    marginLeft: '10%'
  },

  form: {
    width: '100%', // Fix IE 11 issue.
  },
  button:{
    width: '100%',
    marginTop: '1.5rem',
    backgroundColor: '#FF5A5F',
    color: '#FFFFFF'
  }
}));
