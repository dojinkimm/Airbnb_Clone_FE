import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme => ({
  appbar: {
    backgroundColor: 'transparent'
  },
  toolbar: {
    borderBottom: `1px solid ${theme.palette.divider}`,
    height: '8vh',
  },
  toolbarSearch: {
    margin: theme.spacing(2),
    padding: theme.spacing(0),
    flex:0.5,
  },
  tabs:{
    color: '#FFFFFF'
  },
}));
