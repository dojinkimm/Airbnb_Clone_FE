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

interface Props {
  logo: string;
  path: string;
  hasTextField: boolean;
  isLoggedIn: boolean;
  logoutBtn: {
    onClick: (e: React.MouseEvent<HTMLElement>) => void
  }
}

export default function Header({
  logo,
  path,
  hasTextField,
  isLoggedIn,
  logoutBtn
}: Props): React.ReactElement {
  const classes = useStyles();
  const toolbar = hasTextField ? classes.toolbar : '';
  const tabs = hasTextField ? '' : classes.tabs;

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
              <img src={logo} width={35} alt="logo" />
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
          <div className={classes.flexGrow} />
          <div>
            {isLoggedIn && (
              <Link
                to={{
                  pathname: '/upload-room'
                }}
                className={classes.link}
              >
                <Button size="small" className={tabs}>
                  호스트가 되어보세요
                </Button>
              </Link>
            )}
            {isLoggedIn && (
              <Link
                to={{
                  pathname: '/mypage'
                }}
                className={classes.link}
              >
                <Button size="small" className={tabs}>
                  마이 페이지
                </Button>
              </Link>
            )}
            {isLoggedIn ? (
              <Button size="small" className={tabs} {...logoutBtn}>
                Logout
              </Button>
            ) : (
              <Link
                to={{
                  pathname: '/login'
                }}
                className={classes.link}
              >
                <Button className={tabs}>
                  Sign In
                </Button>
              </Link>
            )}
          </div>
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
}
