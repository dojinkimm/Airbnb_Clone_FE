import React  from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';
import { useStyles } from './style';
import logo from '../../../assets/logo.svg';
import google_login from '../../../assets/google_login.svg';


function LoginUI(): React.ReactElement {

  const classes = useStyles();
  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <img src={logo} alt="" width={30} />
        <Typography component="h1" variant="h5">
          Sign In
        </Typography>
        <div className={classes.form}>
          <Link href="http://localhost:8080/auth">
            <Button fullWidth variant="contained" className={classes.submit}>
              <img
                src={google_login}
                alt=""
                width={30}
                style={{ marginRight: '10px' }}
                
              />
              Sign In
            </Button>
          </Link>
        </div>
      </div>
    </Container>
  );
}

export default LoginUI;
