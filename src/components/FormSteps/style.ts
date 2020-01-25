import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme => ({
    root: {
        width: '100%',
      },
      button: {
        marginRight: theme.spacing(1),
      },
      instructions: {
        marginTop: theme.spacing(1),
        marginBottom: theme.spacing(1),
      },
      listItem: {
        padding: theme.spacing(1, 0),
      },
      total: {
        
      },
      title: {
        marginTop: theme.spacing(2),
      },
}));
