import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme => ({
  appbar: {
    position: 'relative'
  },
  toolbar: {
    borderBottom: `1px solid ${theme.palette.divider}`,
    height: '8vh'
  },
  headTitle: {
    marginLeft: '1rem'
  }
}));
