import React from 'react';

import { useStyles } from './style';

interface Data {
  id: number;
  img: string;
}

interface Props {
  tileData: Data[];
}

export default function ImageDisplay({ tileData }: Props): React.ReactElement {
  const classes = useStyles();
  const slicedData = tileData.slice(1);
  const firstImg = tileData[0];

  return (
    <React.Fragment>
      <div className={classes.root}>
        <div>
          <img src={firstImg.img} alt="" className={classes.mainImage} />
        </div>
        <div className={classes.wrapper}>
          {slicedData.map(tile => (
            <img
              key={tile.img}
              className={classes.subImage}
              src={tile.img}
              alt=""
            />
          ))}
        </div>
      </div>
    </React.Fragment>
  );
}
