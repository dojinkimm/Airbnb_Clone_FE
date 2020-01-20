import React from 'react';
import { NavBarMain } from 'src/components/NavBarMain';
import { useStyles } from './style';
import { Search } from 'src/components/Search';


export function MainUI(): React.ReactElement {
  const classes = useStyles();

  return (
    <React.Fragment>
      <div className={classes.back}>
        <NavBarMain />
        <Search/>
      </div>
    </React.Fragment>
  );
}
