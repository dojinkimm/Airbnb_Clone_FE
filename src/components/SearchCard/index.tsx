import React from 'react';
import { useStyles } from './style';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';


export function SearchCard(): React.ReactElement {
  const classes = useStyles();

  return (
    <React.Fragment>
        <Card className={classes.card}>
          <CardHeader title="요금을 확인하려면 날짜를 입력하세요." />
          <CardContent>
          </CardContent>
        </Card>
    </React.Fragment>
  );
}
