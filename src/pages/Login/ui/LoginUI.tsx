import React from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import logo from '../../../assets/logo.svg';
import google_login from '../../../assets/google_login.svg';


import CopyRight from '../../../components/CopyRight';
import { useStyles } from './style';

function LoginUI(): React.ReactElement {
  const classes = useStyles();
  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <img src={logo} alt="" width={30} />
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        <form className={classes.form}>
        <Link href="http://localhost:8080/login?returnTo=/">
          <Button
            // type="submit"
            fullWidth
            variant="contained"
            className={classes.submit}
          >
            <img src={google_login}  alt="" width={30} style={{marginRight: '10px'}}/>
            Sign in
          </Button></Link>
          <Grid container justify="flex-end">
            <Grid item>
              <Link href="/" variant="body2">
                Already have an account? Sign in
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={5}>
        <CopyRight />
      </Box>
    </Container>
  );
}

export default LoginUI;
