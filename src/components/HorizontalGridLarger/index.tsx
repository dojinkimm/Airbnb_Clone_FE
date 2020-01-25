import React from 'react';
// import { Link } from 'react-router-dom';

import GridList from '@material-ui/core/GridList';
import Star from '@material-ui/icons/Star';
import Typography from '@material-ui/core/Typography';
import { CardContent, Card } from '@material-ui/core';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';

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

export default function HorizontalGridLarger({ tileData }: Props): React.ReactElement {
  const classes = useStyles();

  return (
    <React.Fragment>
      <div className={classes.root}>
        <GridList className={classes.gridList} spacing={10} cols={5}>
          {tileData.map(tile => (
            <Card
              className={classes.card}
              elevation={0}
              style={{ padding: '0px', height: '35vh' }}
            >
              <img className={classes.image} src={tile.img} alt={tile.title} />

              <CardContent className={classes.cardcontent}>
                <Container className={classes.container}>
                  <Box component="span" className={classes.box}>
                    슈퍼호스트
                  </Box>
                  <Box component="span" className={classes.subtitle}>
                    {tile.location}
                  </Box>
                  <div className={classes.grow} />
                  <Star className={classes.icon} />
                    <Typography className={classes.rate}>{tile.rate}</Typography>
                </Container>
                <Typography className={classes.title}>{tile.title}</Typography>
              </CardContent>
            </Card>
          ))}
        </GridList>
      </div>
    </React.Fragment>
  );
}
