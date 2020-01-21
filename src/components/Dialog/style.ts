import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme => ({
    toolbar: {
      borderBottom: `1px solid ${theme.palette.divider}`
    },
    button:{
        marginLeft: theme.spacing(1),
        borderRadius: 25
    }
  }));
  