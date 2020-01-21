import React from 'react';
import { Link } from 'react-router-dom';

import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';

import { useStyles } from './style';

interface Data {
  id: number;
  img: string;
  title: string;
  location: string;
  link: string;
  isSuperHost: boolean;
  rate: number;
}

interface Props {
  tileData: Data[];
}

export function HorizontalGridLarger({ tileData }: Props): React.ReactElement {
  const classes = useStyles();

  return (
    <React.Fragment>
      <div className={classes.root}>
        <GridList className={classes.gridList} spacing={10} cols={5}>
          {tileData.map(tile => (
            <GridListTile key={tile.img}>
              <GridListTileBar
                title={tile.title}
                classes={{
                  root: classes.titleBar,
                  title: classes.title
                }}
              />
            </GridListTile>
          ))}
        </GridList>
      </div>
    </React.Fragment>
  );
}
