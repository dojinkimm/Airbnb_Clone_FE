import React from 'react';
import {Header, Filter} from '../../components';

import logo_transparent from 'src/assets/logo_transparent.svg';
import logo from 'src/assets/logo.svg';


import { useStyles } from './style';

interface Props {
  children: React.ReactNode;
  isTransparent?:boolean;
  hasFilter?: boolean;
}

export default function BasedTemplate({
  children,
  isTransparent = false,
  hasFilter = true
}: Props): React.ReactElement {
  const classes = useStyles();



  return (
    <React.Fragment>
      <div className={classes.header}>
        <Header logo={isTransparent? logo_transparent: logo} path={'/'} hasTextField={isTransparent? false: true} />
        {hasFilter && <Filter/>}
      </div>
      <div className={classes.children}>{children}</div>
      {/* <div className={classes.footer}><Footer/></div> */}
    </React.Fragment>
  );
}
