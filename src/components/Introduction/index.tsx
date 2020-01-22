import React from 'react';
import { useStyles } from './style';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import Divider from '@material-ui/core/Divider';
import House from '@material-ui/icons/House';

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
      </div>
      <Divider />
    </React.Fragment>
  );
}
