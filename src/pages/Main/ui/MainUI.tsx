import React from 'react';
import BaseTemplate from 'src/pages/BaseTemplate/BaseTemplate';
import { useStyles } from './style';
import { Search } from 'src/components';


export function MainUI(): React.ReactElement {
  const classes = useStyles();

  return (
    <React.Fragment>
      <div className={classes.back}>
        <BaseTemplate isTransparent={true} hasFilter={false}>
          <Search/>
        </BaseTemplate>
      </div>
    </React.Fragment>
  );
}
