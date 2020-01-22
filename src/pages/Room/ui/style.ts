import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme => ({
  container:{
    padding: '0px',
    maxWidth: '100%'
  },
  introContainer:{
    maxWidth: '50%',
    alignContent: 'center',
    display: 'block',
    marginTop: '2rem'
  }
}));
