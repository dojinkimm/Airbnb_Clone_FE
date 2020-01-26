import React, { useState } from 'react';
import { useStyles } from './style';

import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Grid from '@material-ui/core/Grid';


export function FormStepThree(): React.ReactElement {
  const classes = useStyles();

  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        이미지를 업로드 하세요
      </Typography>
      
      </React.Fragment>
  );
}