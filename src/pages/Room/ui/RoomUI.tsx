import React from 'react';
import { NavBar } from '../../../components/NavBar';
import { ImageViewer } from '../../../components/ImageViewer';
import { Introduction } from '../../../components/Introduction';
// import { SearchCard } from '../../../components/SearchCard';
import { useStyles } from './style';
import logo from '../../../assets/logo.svg';
import Container from '@material-ui/core/Container';

import detail1 from '../../../assets/detail/detail1.jpg';
import detail2 from '../../../assets/detail/detail2.jpg';
import detail3 from '../../../assets/detail/detail3.jpg';
import detail4 from '../../../assets/detail/detail4.jpg';
import detail5 from '../../../assets/detail/detail5.jpg';

const tileData = [
  {
    id: 1,
    img: detail1
  },
  {
    id: 2,
    img: detail2
  },
  {
    id: 3,
    img: detail3
  },
  {
    id: 4,
    img: detail4
  },
  {
    id: 5,
    img: detail5
  }
];

const information = {
  id: 1,
  title: 'I SETTE CONI - TRULLO EDERA',
  location: '오스투니',
  views: 500,
  capacity:4,
  bedRoom: 1,
  bed: 1,
  bath: 1,
  sanitation: 19,
  isSuperhost: true,
  explanation: 'Spend a unforgettable holiday in the enchanting surroundings of the town of Cisternino (reachable from the near airports of Bari and Brindisi).\nTrullo Edera offers a heaven of peace and tranquillity, set in an elevated position with a stunning view.'
};

export function RoomUI(): React.ReactElement {
  const classes = useStyles();

  return (
    <React.Fragment>
      <NavBar logo={logo} path={'/search'} hasTextField={true} />
      <Container className={classes.container}>
        <Container className={classes.container}>
          <ImageViewer tileData={tileData} />
        </Container>
        <Container className={classes.introContainer}>
          <Introduction data={information}/>
     
        </Container>
      </Container>
    </React.Fragment>
  );
}
