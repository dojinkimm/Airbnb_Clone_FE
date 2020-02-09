import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme => ({
  bgPurple: {
    background: `url(${'http://salehriaz.com/404Page/img/bg_purple.png'})`,
    backgroundRepeat: 'repeat-x',
    backgroundSize: 'cover',
    backgroundPosition: 'left top',
    height: '100vh',
    overflow: 'hidden'
  },
  stars: {
    background: `url(${'http://salehriaz.com/404Page/img/overlay_stars.svg'})`,
    backgroundRepeat: `repeat`,
    backgroundSize: `contain`,
    backgroundPosition: 'left top'
  },
  centralBody: {
    padding: '17% 5% 10% 5%',
    textAlign: 'center'
  },
  image404: {width: '300px'},
  buttonGoHome: {
    position: 'relative',
    margin: '15px auto',
    width: '100px',
    padding: '10px 15px',
    border: '1px solid #FFCB39',
    borderRadius: '100px',
    display: 'block',
    color: 'white',
    textAlign: 'center',
    textDecoration: 'none',
    letterSpacing : '2px',
    fontSize: '11px',
    WebkitTransition: 'all 0.3s ease-in',
    mozTransition: 'all 0.3s ease-in',
    msTransition: 'all 0.3s ease-in',
    oTransition: 'all 0.3s ease-in',
    transition: 'all 0.3s ease-in',
    '&:hover': {
      backgroundColor: '#FFCB39',
      color: '#fff',
      transform: 'scale(1.05)',
      boxShadow: '0px 20px 20px rgba(0,0,0,0.1)'
    }
  },
  objectEarth: {
    width: '100px',
    position: 'absolute',
    top: '20%',
    left: '15%'
  },
  objectMoon: {
    position: 'absolute',
    top: '12%',
    left: '25%',
    width: '80px'
  },
  objectAstronaut:{
    position: 'absolute',
    top: '30%',
    left: '60%',
    width: '100px'
  }
}));
