import { makeStyles } from '@material-ui/core/styles';
import background from '../../../assets/main_img.jpg';

export const useStyles = makeStyles(theme => ({
  back: {
    backgroundImage: `url(${background})`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center center',
    backgroundSize: 'cover',
    backgroundAttachment: 'fixed',
    height: '100vh'
  },
}));
