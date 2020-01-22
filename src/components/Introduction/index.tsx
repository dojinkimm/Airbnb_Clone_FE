import React from 'react';
import { useStyles } from './style';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import Divider from '@material-ui/core/Divider';
import {House, LocationOn, LocalLaundryServiceSharp, Star } from '@material-ui/icons';
import Button from '@material-ui/core/Button';

interface Props {
  data: {
    id: number;
    title: string;
    location: string;
    views: number;
    capacity: number;
    bedRoom: number;
    bed: number;
    bath: number;
    sanitation: number;
    isSuperhost: boolean;
    explanation: string;
  };
}

export function Introduction(data: Props): React.ReactElement {
  const classes = useStyles();
  const information = data.data;


  return (
    <React.Fragment>
      <div className={classes.flex}>
        <div>
          <Typography variant="h4">{information.title}</Typography>
          <Typography variant="subtitle1">{information.location}</Typography>
        </div>
        <div className={classes.growFlex} />
        <Avatar />
      </div>

      <div className={classes.flex}>
        <Typography variant="subtitle1" className={classes.subHeader}>
          인원 {information.capacity}명
        </Typography>
        <Typography variant="subtitle1" className={classes.subHeader}>
          침실{information.bedRoom}개
        </Typography>
        <Typography variant="subtitle1" className={classes.subHeader}>
          침실{information.bed}개
        </Typography>
        <Typography variant="subtitle1" className={classes.subHeader}>
          욕조 {information.bath}개
        </Typography>
      </div>
      <Divider />

      <div>
        <div className={classes.flex}>
          <House className={classes.icons} />
          <div>
            <Typography>집 전체</Typography>
            <Typography>주택 전체를 단독으로 사용하시게 됩니다.</Typography>
          </div>
        </div>
        <div className={classes.flex}>
          <LocalLaundryServiceSharp className={classes.icons} />
          <div>
            <Typography>높은 청결도</Typography>
            <Typography>
              최근 게스트 {information.sanitation}명이 이 숙소가 티 없이
              깨끗하다고 후기를 남겼습니다.
            </Typography>
          </div>
        </div>
        
        {information.isSuperhost ?<div className={classes.flex}>
          <Star className={classes.icons} />
          <div>
            <Typography>Anna님은 슈퍼호스트입니다</Typography>
            <Typography>
              슈퍼호스트는 풍부한 경험과 높은 평점을 자랑하며 게스트가 숙소에서
              편안히 머무를 수 있도록 최선을 다하는 호스트입니다.
            </Typography>
          </div>
        </div> : ""}
        <div className={classes.flex}>
          <LocationOn className={classes.icons} />
          <div>
            <Typography>훌륭한 숙소 위치</Typography>
            <Typography>
              최근 숙박한 게스트 중 90%가 위치에 별점 5점을 준 숙소입니다.
            </Typography>
          </div>
        </div>
      </div>
      <Divider />

      <Button className={`${classes.marginVertical} ${classes.fullWidth}`} variant="contained">이 설명을 한국어로 번역하기</Button>

      <div>
        <Typography variant="subtitle1">숙소</Typography>
        <Typography variant="subtitle1">{information.explanation}</Typography>
        <Typography className={classes.marginVertical}><a href="/">호스트에게 연락하기</a></Typography>
      </div>
      <Divider />
    
    </React.Fragment>
  );
}
