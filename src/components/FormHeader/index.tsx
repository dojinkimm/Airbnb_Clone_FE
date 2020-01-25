import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import logo from 'src/assets/logo.svg';

import { useStyles } from './style';


export default function FormHeader(): React.ReactElement {
  const classes = useStyles();

  return (
    <React.Fragment>
      <AppBar
        className={classes.appbar}
        position="static"
        color="inherit"
        elevation={0}
      >
        <Toolbar className={classes.toolbar}>
          <IconButton>
            <img src={logo} width={30} alt="logo" />
          </IconButton>
          <Typography
            className={classes.headTitle}
            variant="h6"
            color="inherit"
            noWrap
          >
            호스트가 되어보세요
          </Typography>
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
}
