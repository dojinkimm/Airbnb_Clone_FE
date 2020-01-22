import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  wrapper:{
    width: '50vw',
    display: 'grid',
    gridTemplateColumns: `repeat(2, 50%)`,
    gridGap: '0px',
  },
  mainImage:{
    width: '50vw'
  },
  subImage: {
    width: '25vw',
    height: '50%'
  }
}));
