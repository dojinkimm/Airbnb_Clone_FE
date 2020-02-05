import { withStyles, makeStyles } from '@material-ui/core/styles';
import Slider from '@material-ui/core/Slider';

export const useStyles = makeStyles(theme => ({
  card: {
    padding: '32px',
    width: '50%',
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    boxShadow:
      '0 15px 30px 0 rgba(0, 0, 0, 0.11), 0 5px 15px 0 rgba(0, 0, 0, 0.08)',
    boxSizing: 'border-box'
  },
  upload: {
    display: 'flex',
    flexDirection: 'column',
    flex: '1',
    alignItems: 'flex-start',
    textAlign: 'left',
    overflow: 'hidden'
  },
  content: {
    display: 'flex',
    flexDirection: 'row',
    paddingTop: '16px',
    boxSizing: 'border-box',
    width: '100%'
  },
  files: {
    marginLeft: '32px',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    flex: '1',
    overflowY: 'auto'
  },
  actions: {
    display: 'flex',
    flex: '1',
    width: '100%',
    alignItems: 'flex-end',
    flexDirection: 'column',
    marginTop: '32px'
  },
  title: {
    marginBottom: '32px',
    color: '#555'
  },
  imageCard: {
    display: 'flex',
    flexDirection: 'column',

    border: '1px solid #ced4da',
    borderRadius: '0.5rem',
    justifyContent: 'center'
  },
  cardBody: {
    flex: '1 1 auto',
    minHeight: '1px',
    height: '20vh',
    padding: '1.25rem'
  },
  formControl: {
    display: 'block',
    height: '10vh',
    width: '90%',
    fontSize: '0.5rem',
    padding: '0.375rem 0.75rem',

    color: '#495057'
  },
  images: {
    width: '33%'
  }
}));

export const PrettoSlider = withStyles({
  root: {
    color: '#FF5A5F',
    height: 8
  },
  thumb: {
    height: 24,
    width: 24,
    backgroundColor: '#fff',
    border: '2px solid currentColor',
    marginTop: -8,
    marginLeft: -12,
    '&:focus,&:hover,&$active': {
      boxShadow: 'inherit'
    }
  },
  active: {},
  valueLabel: {
    left: 'calc(-50% + 4px)'
  },
  track: {
    height: 8,
    borderRadius: 4
  },
  rail: {
    height: 8,
    borderRadius: 4
  }
})(Slider);
