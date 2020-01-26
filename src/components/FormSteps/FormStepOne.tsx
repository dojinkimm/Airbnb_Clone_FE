import React, { useState } from 'react';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import FormGroup from '@material-ui/core/FormGroup';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { useStyles, PrettoSlider } from './style';

export function FormStepOne(): React.ReactElement {
  const classes = useStyles();
  // 욕실수
  // checkbox로 편의시설 뭐뭐있는지

  const [value, setValue] = useState<number>(30);

  const handleChange = (event: any, newValue: number | number[]) => {
    setValue(newValue as number);
  };
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

  const [checkbox, setCheckboxState] = useState({
    wifi: false,
    parking: false,
    kitchen: false,
    breakfast: false,
    tv: false,
    laundry: false,
    ac: false,
  });

  const handleChangeCheckbox = (name: string) => (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setCheckboxState({ ...checkbox, [name]: event.target.checked });
  };

  const { wifi, parking, kitchen, breakfast, tv, laundry, ac } = checkbox;

  return (
    <React.Fragment>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          숙소 이름
          <TextField required id="name" variant="outlined" fullWidth />
        </Grid>
        <Grid item xs={12} md={6}>
          최대 숙박 인원
          <TextField required id="capacity" variant="outlined" fullWidth/>
        </Grid>
        <Grid item xs={12} md={6}>
          침실의 수
          <TextField required id="bedroom" variant="outlined" fullWidth/>
        </Grid>
        <Grid item xs={12} md={6}>
          침대의 수
          <TextField required id="bed" variant="outlined" fullWidth />
        </Grid>
        <Grid item xs={12} md={6}>
          욕실의 수
          <TextField required id="bath" variant="outlined" fullWidth />
        </Grid>
        <Grid item xs={12}>
          가격
          <PrettoSlider
          id="price"
            valueLabelDisplay="auto"
            onChange={handleChange}
            aria-label="pretto slider"
            max={10000}
            defaultValue={value}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          체크인
          <TextField required id="checkin" placeholder="예) 14:00" variant="outlined" fullWidth />
        </Grid>
        <Grid item xs={12} md={6}>
          체크아웃
          <TextField required id="checkout" placeholder="예) 11:00" variant="outlined" fullWidth />
        </Grid>
        <Grid item xs={12}>
          집 유형
          <FormControl
          id="houseType"
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
              <option value={'apt'}>아파트</option>
              <option value={'villa'}>주택</option>
              <option value={'pansion'}>별채</option>
              <option value={'unique'}>독특한 숙소</option>
              <option value={'bandb'}>B&B</option>
            </Select>
          </FormControl>
        </Grid>

        <Grid item xs={12}>
          편의시설
          <br />
          <FormControl component="fieldset" id="convenience">
            <FormGroup>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={wifi}
                    onChange={handleChangeCheckbox('wifi')}
                    value="wifi"
                  />
                }
                label="Wifi"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={parking}
                    onChange={handleChangeCheckbox('parking')}
                    value="parking"
                  />
                }
                label="주차 공간"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={kitchen}
                    onChange={handleChangeCheckbox('kitchen')}
                    value="kitchen"
                  />
                }
                label="주방"
              />
                <FormControlLabel
                control={
                  <Checkbox
                    checked={breakfast}
                    onChange={handleChangeCheckbox('breakfast')}
                    value="breakfast"
                  />
                }
                label="조식 제공"
              />
                <FormControlLabel
                control={
                  <Checkbox
                    checked={tv}
                    onChange={handleChangeCheckbox('tv')}
                    value="tv"
                  />
                }
                label="TV"
              />
                <FormControlLabel
                control={
                  <Checkbox
                    checked={laundry}
                    onChange={handleChangeCheckbox('laundry')}
                    value="laundry"
                  />
                }
                label="세탁기"
              />
                <FormControlLabel
                control={
                  <Checkbox
                    checked={ac}
                    onChange={handleChangeCheckbox('ac')}
                    value="ac"
                  />
                }
                label="에어컨"
              />
            </FormGroup>
          </FormControl>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
