import React from 'react';
import BaseTemplate from 'src/pages/BaseTemplate/BaseTemplate';
import { useStyles } from './style';

export function MyPageUI(): React.ReactElement {
  const classes = useStyles();

  return (
    <BaseTemplate hasFilter={false}>
      
    </BaseTemplate>
  );
}
