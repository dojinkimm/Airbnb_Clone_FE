import React from 'react';
import { useStyles } from './style';
import Typography from '@material-ui/core/Typography';
import { Wifi, LocalParking, Kitchen, FreeBreakfast, Tv, LocalLaundryService, AcUnit,   } from '@material-ui/icons';
interface Props {
  hasWifi?: boolean;
  hasParking?: boolean;
  hasKitchen?: boolean;
  hasBreakfast?: boolean;
  hasTV?: boolean;
  hasLaundry?: boolean;
  hasAC?: boolean;
}

export default function Convenience({
  hasWifi = true,
  hasParking = true,
  hasKitchen = true,
  hasBreakfast = true,
  hasTV = true,
  hasLaundry = true,
  hasAC = true,
}: Props): React.ReactElement {
  const classes = useStyles();

  return (
    <React.Fragment>
      <div className={classes.marginVertical}>
        <Typography>편의시설</Typography>
        {hasWifi && <div className={classes.flexMargin}>
          <Wifi className={classes.icons} />
          <Typography>무선 인터넷</Typography>
        </div>}
       {hasParking && <div className={classes.flexMargin}>
          <LocalParking className={classes.icons} />
          <Typography>건물 내 무료주차</Typography>
        </div>}
        {hasKitchen && <div className={classes.flexMargin}>
          <Kitchen className={classes.icons} />
          <Typography>주방</Typography>
        </div>}
        {hasBreakfast && <div className={classes.flexMargin}>
          <FreeBreakfast className={classes.icons} />
          <Typography>아침식사 제공</Typography>
        </div>}
        {hasTV && <div className={classes.flexMargin}>
          <Tv className={classes.icons} />
          <Typography>케이블 TV</Typography>
        </div>}
        {hasLaundry && <div className={classes.flexMargin}>
          <LocalLaundryService className={classes.icons} />
          <Typography>세탁기</Typography>
        </div>}
        {hasAC && <div className={classes.flexMargin}>
          <AcUnit className={classes.icons} />
          <Typography>에어컨</Typography>
        </div>}
      </div>

    </React.Fragment>
  );
}
