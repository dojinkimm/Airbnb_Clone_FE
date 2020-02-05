import React from 'react';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';

import { country } from 'src/common/data';

interface onChangeEvent {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export interface Props {
  FormInputs: {
    country: {
      value: string;
      onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    };
    city: onChangeEvent;
    address: onChangeEvent;
    street1: onChangeEvent;
    street2: onChangeEvent;
  };
}

export function FormStepTwo({ FormInputs }: Props): React.ReactElement {
  return (
    <React.Fragment>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          국가/지역
          <TextField
            name="country"
            select
            variant="outlined"
            fullWidth
            {...FormInputs.country}
          >
            {country.map(c => (
              <MenuItem key={c.country} value={c.country}>
                {c.country}
              </MenuItem>
            ))}
          </TextField>
        </Grid>
        <Grid item xs={12} sm={6}>
          시/도
          <TextField
            required
            name="city"
            placeholder="예) 서울특별시"
            variant="outlined"
            fullWidth
            {...FormInputs.city}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          시/군/구
          <TextField
            name="address"
            variant="outlined"
            placeholder="예) 강남구"
            fullWidth
            {...FormInputs.address}
          />
        </Grid>
        <Grid item xs={12}>
          도로명 주소
          <TextField
            required
            name="street1"
            variant="outlined"
            placeholder="예) 언주로 307"
            fullWidth
            {...FormInputs.street1}
          />
        </Grid>
        <Grid item xs={12}>
          동호수 (선택사항)
          <TextField
            name="street2"
            variant="outlined"
            placeholder="예) 35동 3층 307호"
            fullWidth
            {...FormInputs.street2}
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
