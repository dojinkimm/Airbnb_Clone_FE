import React, { useState } from 'react';
import { useStyles } from './style';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';


import moment, { Moment } from 'moment';
import { DateRangePicker } from 'react-dates';
import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';

export default function SearchCard(): React.ReactElement {
  const classes = useStyles();
  const [startDate, setStartDate] = useState<Moment | null>(moment());
  const [focusInput, setFocusInput] = useState<any>('startDate');
  const [endDate, setEndDate] = useState<Moment | null>(moment());


  return (
    <React.Fragment>
        <Card className={classes.card}>
          <CardHeader title="요금을 확인하려면 날짜를 입력하세요." />
          <CardContent>
          <Container component="main" maxWidth="xs">
            <CssBaseline />

            <form className={classes.form}>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <DateRangePicker
                    startDateId="startDate"
                    endDateId="endDate"
                    startDate={startDate}
                    endDate={endDate}
                    onDatesChange={({ startDate, endDate }) => {
                      setEndDate(startDate);
                      setStartDate(endDate);
                    }}
                    focusedInput={focusInput}
                    onFocusChange={focusedInput => {
                      setFocusInput( focusedInput );
                    }}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    variant="outlined"
                    select
                    required
                    fullWidth
                    id="people"
                    placeholder="인원"
                    label="인원"
                    name="people"
                    InputLabelProps={{
                      shrink: true
                    }}
                  />
                </Grid>
              </Grid>
              <Button
                type="submit"
                variant="contained"
                color="primary"
                className={classes.submit}
              >
                검색
              </Button>
            </form>
          </Container>
        </CardContent>
        </Card>
    </React.Fragment>
  );
}
