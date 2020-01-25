import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme => ({
  container:{
    padding: '0px',
    maxWidth: '100%'
  },
  introContainer:{
    maxWidth: '60%',
    alignContent: 'center',
    display: 'flex',
    marginTop: '2rem'
  },
  card:{
    marginLeft: '3rem'
  }
}));
