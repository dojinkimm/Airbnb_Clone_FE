import React, { useState } from 'react';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import FormGroup from '@material-ui/core/FormGroup';
import FormControl from '@material-ui/core/FormControl';
import MenuItem from '@material-ui/core/MenuItem';
import InputAdornment from '@material-ui/core/InputAdornment';
import Input from '@material-ui/core/Input';
import { PrettoSlider } from './style';

import { houseTypes, convenience } from 'src/common/data';

interface onChangeEvent {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export interface Props {
  FormInputs: {
    name: onChangeEvent;
    capacity: onChangeEvent;
    bedroom: onChangeEvent;
    bed: onChangeEvent;
    bath: onChangeEvent;
    priceSlider: {
      value: number;
      onChange: any;
    };
    priceInput: {
      value: number;
      onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    };
    checkin: onChangeEvent;
    checkout: onChangeEvent;
    houseType: {
      value: string;
      onChange:(e: React.ChangeEvent<HTMLInputElement>) => void;
    };
    convenience: any;
  }
}

export function FormStepOne({ FormInputs }: Props): React.ReactElement {

  return (
    <React.Fragment>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          숙소 이름
          <TextField
            required
            name="name"
            variant="outlined"
            type="text"
            fullWidth
            {...FormInputs.name}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          최대 숙박 인원
          <TextField
            required
            name="capacity"
            variant="outlined"
            type="text"
            fullWidth
            {...FormInputs.capacity}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          침실의 수
          <TextField
            required
            name="bedroom"
            variant="outlined"
            type="text"
            fullWidth
            {...FormInputs.bedroom}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          침대의 수
          <TextField
            required
            name="bed"
            variant="outlined"
            type="text"
            fullWidth
            {...FormInputs.bed}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          욕실의 수
          <TextField
            required
            name="bath"
            variant="outlined"
            type="text"
            fullWidth
            {...FormInputs.bath}
          />
        </Grid>
        <Grid item xs={12} md={10}>
          가격
          <PrettoSlider
            name="price"
            valueLabelDisplay="auto"
            aria-label="pretto slider"
            max={5000}
            {...FormInputs.priceSlider}
          />
        </Grid>
        <Grid item xs={12} md={2}>
          <Input
            {...FormInputs.priceInput}
            startAdornment={<InputAdornment position="start">$</InputAdornment>}
            inputProps={{
              step: 10,
              min: 0,
              max: 5000,
              type: 'number',
              'aria-labelledby': 'input-slider'
            }}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          체크인
          <TextField
            required
            name="checkin"
            placeholder="예) 14:00"
            variant="outlined"
            type="text"
            fullWidth
            {...FormInputs.checkin}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          체크아웃
          <TextField
            required
            name="checkout"
            placeholder="예) 11:00"
            variant="outlined"
            type="text"
            fullWidth
            {...FormInputs.checkout}
          />
        </Grid>
        <Grid item xs={12}>
          집 유형
          <TextField
            id="outlined-select-currency"
            select
            {...FormInputs.houseType}
            variant="outlined"
            fullWidth
          >
            {houseTypes.map(h => (
              <MenuItem key={h.value} value={h.label}>
                {h.label}
              </MenuItem>
            ))}
          </TextField>
        </Grid>

        <Grid item xs={12}>
          편의시설
          <br />
          <FormControl component="fieldset" id="convenience">
            <FormGroup>
              {convenience.map((conv) => (
                <FormControlLabel
                key={conv.id}
                control={
                  <Checkbox
                  {...FormInputs.convenience[`${conv.value}`]}
                  />
                }
                label={conv.label}
              />
              ))}
            </FormGroup>
          </FormControl>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
