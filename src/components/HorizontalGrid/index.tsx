import React from 'react';
// import { Link } from 'react-router-dom';

import GridList from '@material-ui/core/GridList';
import Typography from '@material-ui/core/Typography';
import { CardContent, Card } from '@material-ui/core';

import { useStyles } from './style';

interface Data {
  id: number;
  img: string;
  title: string;
  link: string;
}

interface Props {
  tileData: Data[];
}

export default function HorizontalGrid({ tileData }: Props): React.ReactElement {
  const classes = useStyles();

  return (
    <React.Fragment>
      <div className={classes.root}>
        <GridList className={classes.gridList} spacing={10} cols={8}>
          {tileData.map(tile => (
            <Card className={classes.card} elevation={3} style={{padding:"0px"}}>
              <img className={classes.image} src={tile.img} alt={tile.title} />
              <CardContent className={classes.cardcontent}>
                <Typography>{tile.title}</Typography>
              </CardContent>
            </Card>
          ))}
        </GridList>
      </div>
    </React.Fragment>
  );
}
/* <GridListTile key={tile.img} className={classes.gridItem}>
          
          <GridListTileBar
            title={tile.title}
            classes={{
              root: classes.titleBar,
              title: classes.title
            }}
          />
        </GridListTile> */
