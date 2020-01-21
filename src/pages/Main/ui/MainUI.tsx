import React from 'react';
import { NavBar } from 'src/components/NavBar';
import { useStyles } from './style';
import { Search } from 'src/components/Search';
import logo from '../../../assets/logo_transparent.svg';


export function MainUI(): React.ReactElement {
  const classes = useStyles();

  return (
    <React.Fragment>
      <div className={classes.back}>
        <NavBar logo={logo} path={'/'} hasTextField={false} />
        <Search/>
      </div>
    </React.Fragment>
  );
}
