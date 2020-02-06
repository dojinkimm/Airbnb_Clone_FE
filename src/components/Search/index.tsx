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
import Divider from '@material-ui/core/Divider';
import MenuItem from '@material-ui/core/MenuItem';

import moment, { Moment } from 'moment';
import { DateRangePicker } from 'react-dates';
import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';


export default function Search(): React.ReactElement {
  const classes = useStyles();
  const [startDate, setStartDate] = useState<Moment | null>(moment());
  const [focusInput, setFocusInput] = useState<any>('startDate');
  const [endDate, setEndDate] = useState<Moment | null>(moment());

  return (
    <React.Fragment>
      <Card className={classes.card}>
      <div className={classes.cardHeader}>
          <CardHeader
            title="특색 있는 숙소와 즐길 거리를 예약하세요."
            titleTypographyProps={{ variant: 'h6' }}
          />
          <Divider />
        </div>

        <CardContent>
          <Container component="main" maxWidth="xs">
            <CssBaseline />

            <form className={classes.form}>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  목적지
                  <TextField
                    variant="outlined"
                    required
                    fullWidth
                    id="destination"
                    name="destination"
                    InputLabelProps={{
                      shrink: true
                    }}
                  />
                </Grid>
                <Grid item xs={12}>
                  날짜
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
                  인원
                  <TextField
                    variant="outlined"
                    select
                    required
                    fullWidth
                    id="people"
                    name="people"
                    InputLabelProps={{
                      shrink: true
                    }}
                  >
                    {[1,2,3,4,5].map(person => (
                      <MenuItem key={person} value={person}>
                          {person}
                      </MenuItem>
                    ))}

                  </TextField>
                </Grid>
              </Grid>
              <Button
                type="submit"
                variant="contained"
                color="primary"
                className={classes.button}
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
