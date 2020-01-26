import React, { useState } from 'react';
import { useStyles } from './style';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

import {country} from 'src/common/country';

export function FormStepTwo(): React.ReactElement {
  const classes = useStyles();

  const [value, setValue] = useState<number>(30);

  const [state, setState] = useState<{
    age: string | number;
    name: string;
  }>({
    age: '',
    name: 'hai'
  });

  const handleChangeSelect = (name: keyof typeof state) => (
    event: React.ChangeEvent<{ value: unknown }>
  ) => {
    setState({
      ...state,
      [name]: event.target.value
    });
  };

  return (
    <React.Fragment>
      <Grid container spacing={3}>
      <Grid item xs={12}>
          국가/지역
          <FormControl
          id="country"
            variant="outlined"
            className={classes.formControl}
            fullWidth
          >
            <Select
              native
              value={state.age}
              onChange={handleChangeSelect('age')}
              inputProps={{
                name: 'age',
                id: 'outlined-age-native-simple'
              }}
            >
              <option value="" />
              {country.map(c =>(
                <option value={`${c.abbreviation}`}>{c.country}</option>
                ))}
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12} sm={6}>
          시/도
          <TextField
            required
            id="address1"
            name="address1"
            placeholder="예) 서울특별시"
            variant="outlined"
            fullWidth
            autoComplete="billing address-line1"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          시/군/구
          <TextField
            id="address2"
            name="address2"
            variant="outlined"
            placeholder="예) 강남구"
            fullWidth
            autoComplete="billing address-line2"
          />
        </Grid>
        <Grid item xs={12}>
          도로명 주소
          <TextField
            required
            id="street1"
            name="street1"
            variant="outlined"
            placeholder="예) 언주로 307"
            fullWidth
            autoComplete="billing address-level2"
          />
        </Grid>
        <Grid item xs={12}>
          동호수 (선택사항)
          <TextField
            id="street2"
            name="street2"
            variant="outlined"
            placeholder="예) 35동 3층 307호"
            fullWidth
            autoComplete="billing address-level3"
          />
        </Grid>
      </Grid>
      </React.Fragment>
  );
}