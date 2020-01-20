import React from 'react';
import { Link } from 'react-router-dom';

import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import logo from '../../assets/logo_transparent.svg';
import AppBar from '@material-ui/core/AppBar';

import { useStyles } from './style';

export function NavBarMain(): React.ReactElement {
  const classes = useStyles();

  return (
    <React.Fragment>
      <AppBar
        className={classes.appbar}
        position="static"
        color="inherit"
        elevation={0}
      >
        <Toolbar>
          <IconButton>
            <Link
              to={{
                pathname: `/`
              }}
            >
              <img src={logo} width={30} alt="logo" />
            </Link>
          </IconButton>

          <div className={classes.grow} />
          <div>
            <Button size="small">한국어(KR)</Button>
            <Button size="small">₩ KRW</Button>
            <Button size="small">Sign up</Button>
            <Button size="small">Login</Button>
          </div>
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
}
