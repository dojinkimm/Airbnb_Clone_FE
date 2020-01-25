import React from 'react';

import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';

import { useStyles } from './style';

export default function Dialog(): React.ReactElement {
  const classes = useStyles();

  return (
    <React.Fragment>
      <Toolbar className={classes.toolbar} variant="dense">
        <div>
          <Button  className={classes.button} size="small" variant="outlined">날짜</Button>
          <Button  className={classes.button} size="small" variant="outlined">인원</Button>
          <Button  className={classes.button} size="small" variant="outlined">숙소 유형</Button>
          <Button  className={classes.button} size="small" variant="outlined">필터 추가하기</Button>
        </div>
      </Toolbar>
    </React.Fragment>
  );
}
