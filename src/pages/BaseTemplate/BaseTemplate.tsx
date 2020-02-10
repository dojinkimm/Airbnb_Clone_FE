import React, { useContext } from 'react';
import { Header, Filter } from '../../components';

import logo_transparent from 'src/assets/logo_transparent.svg';
import logo from 'src/assets/logo.svg';

import { AuthState, LoginDispatch, AuthDispatch } from 'src/store/authStore';
import { useStyles } from './style';
import { useCookies } from 'react-cookie';

interface Props {
  children: React.ReactNode;
  isTransparent?: boolean;
  hasFilter?: boolean;
}

export default function BasedTemplate({
  children,
  isTransparent = false,
  hasFilter = true
}: Props): React.ReactElement {
  const classes = useStyles();
  const [,,removeCookie] = useCookies(['UID']);
  const authState = useContext(AuthState);
  const setLogin = useContext(LoginDispatch);
  const authStateDispatcher = useContext(AuthDispatch);

  const logoutBtn = {
    onClick: (e: React.MouseEvent<HTMLElement>): void => {
      e.preventDefault();
      removeCookie('UID');

      authStateDispatcher({
        type: 'LOGOUT',
        value: {
          isAuth: false,
          token: ''
        }
      });
      setLogin(false);
    }
  };

  return (
    <React.Fragment>
      <div className={classes.header}>
        <Header
          logo={isTransparent ? logo_transparent : logo}
          path={'/'}
          hasTextField={isTransparent ? false : true}
          isLoggedIn={authState.isAuth}
          logoutBtn={logoutBtn}
        />
        {hasFilter && <Filter />}
      </div>
      <div className={classes.children}>{children}</div>
      {/* <div className={classes.footer}><Footer/></div> */}
    </React.Fragment>
  );
}
