import React from 'react';

import { useStyles } from './style';

interface Props{
    bannerImg: string;
}

export default function Banner({bannerImg}: Props): React.ReactElement {
  const classes = useStyles();

  return (
    <React.Fragment>
        <div>
            <img src={bannerImg} alt="banner" className={classes.img}/>
        </div>
      
    </React.Fragment>
  );
}
