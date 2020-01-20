import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme => ({
  appbar: {
    backgroundColor: 'transparent'
  },
  toolbarSearch: {
    margin: theme.spacing(1),
    padding: theme.spacing(0),
    height: '6vh'
  },
  grow: {
    flexGrow: 1
  }
}));
