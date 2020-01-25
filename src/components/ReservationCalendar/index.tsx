import React, { useState } from 'react';
// import { useStyles } from './style';
import Typography from '@material-ui/core/Typography';

import moment, { Moment } from 'moment';
import { DateRangePicker } from 'react-dates';
import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';

export default function ReservationCalendar(): React.ReactElement {
  // const classes = useStyles();
  const [startDate, setStartDate] = useState<Moment | null>(moment());
  const [focusInput, setFocusInput] = useState<any>('startDate');
  const [endDate, setEndDate] = useState<Moment | null>(moment());

  return (
    <React.Fragment>
      <Typography variant="h6">예약 가능 여부</Typography>
      <Typography variant="subtitle1">
        정확한 요금과 예약 가능 여부를 확인하려면 여행 일자를 입력하세요
      </Typography>
      {/* <DayPickerRangeController/> */}
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
          setFocusInput(focusedInput);
        }}
      />
    </React.Fragment>
  );
}
