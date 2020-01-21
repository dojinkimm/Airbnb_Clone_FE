import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme => ({
  content:{
    marginLeft: '4vw',
    marginRight: '4vw',
    marginTop: '3vh'
  },
  instruction:{
    color: '#717171',
    fontSize: '14px',
    borderBottom: `1px solid ${theme.palette.divider}`,
    marginBottom: '50px',
    paddingBotom: '50px'
  },
  title:{
    fontSize: '22px',
    fontWeight: "bold"
  },
  bwtitles:{
    marginTop: '10vh'
  }
}));
