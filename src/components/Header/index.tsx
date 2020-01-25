import React from 'react';
import { Link } from 'react-router-dom';

import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import InputAdornment from '@material-ui/core/InputAdornment';
import TextField from '@material-ui/core/TextField';
import AppBar from '@material-ui/core/AppBar';

import { useStyles } from './style';
import 'src/styles/normalize.css';

interface Props {
  logo: string;
  path: string;
  hasTextField: boolean;
}

export default function Header({
  logo,
  path,
  hasTextField
}: Props): React.ReactElement {
  const classes = useStyles();
  const toolbar = hasTextField ? classes.toolbar : '';

  return (
    <React.Fragment>
      <AppBar
        className={classes.appbar}
        position="static"
        color="inherit"
        elevation={0}
      >
        <Toolbar className={toolbar}>
          <IconButton>
            <Link
              to={{
                pathname: `${path}`
              }}
            >
              <img src={logo} width={30} alt="logo" />
            </Link>
          </IconButton>

          {hasTextField && (
            <TextField
              className={classes.toolbarSearch}
              id="input-with-icon-textfield"
              variant="outlined"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon />
                  </InputAdornment>
                )
              }}
            />
          )}
          <div className="flex-grow" />
          <div>
            <Button size="small">한국어(KR)</Button>
            <Button size="small">₩ KRW</Button>
            <Button size="small">Sign up</Button>
            <Link
              to={{
                pathname: '/login'
              }}
            ><Button size="small">Login</Button></Link>
          </div>
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
}
