import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme => ({
  flex:{
    display: 'flex'
  },
  flexMargin: {
    display: 'flex',
    marginTop: '1.5rem',
    marginBottom: '1.5rem'
  },
  marginVertical:{
    marginTop: '1.5rem',
    marginBottom: '1.5rem'
  },
  growFlex:{
    flex:1
  },
  subHeader:{
    marginRight: '2rem',
  },
  icons:{
    marginRight: '2rem',
  },
  fullWidth:{
    width: '100%'
  }
}));
