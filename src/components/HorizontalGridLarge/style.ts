import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    flexWrap: 'nowrap',
    // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
    transform: 'translateZ(0)',
  },
  gridItem:{
    // margin: theme.spacing(2),
    border: '1px solid',
    height: '70vh'
  },
  image: {
    height: '70%',
    width: '100%'
  },
  title: {
    color: '#343434',
    marginTop: '0.5rem'
  },
  subtitle:{
    marginLeft: '0.3rem',
    fontSize: '0.8rem',
    color: '#717171',
    padding: '2px'
  },
  container:{
    padding: '0px',
    display:'flex'
  },
  titleBar: {
    background:
      // 'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
      '#FFFFFF'
  },
  rate:{
    fontSize: '0.8rem'
  },
  icon:{
    color: '#FF385C',
    height: '2vh',
    
  },
  cardcontent:{
    padding: '0px',
    paddingTop: '10px'
  },
  card:{
    height:'30vh',
    margin: '10px',
  },
  box:{
    border: '1px solid',
    borderRadius: '0.3rem',
    fontSize: '0.8rem',
    padding: '2px'
  },
  grow: {
    flexGrow: 1
  }
}));