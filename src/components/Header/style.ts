import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme => ({
  appbar: {
    backgroundColor: 'transparent'
  },
  toolbar: {
    borderBottom: `1px solid ${theme.palette.divider}`,
    height: '6vh'
  },
  toolbarSearch: {
    margin: theme.spacing(1),
    padding: theme.spacing(0),
  },
  grow: {
    flexGrow: 1
  }
}));
