import React from 'react';
import { NavBar } from '../../../components/NavBar';
import { Filter } from '../../../components/Filter';
import { HorizontalGrid } from '../../../components/HorizontalGrid';
import { HorizontalGridLarger } from '../../../components/HorizontalGridLarge';
import { useStyles } from './style';
import Typography from '@material-ui/core/Typography';
import logo from '../../../assets/logo.svg';

import seoul from '../../../assets/city/seoul.jpg';
import newyork from '../../../assets/city/newyork.jpg';
import berlin from '../../../assets/city/berlin.jpg';
import capetown from '../../../assets/city/capetown.jpg';
import chicago from '../../../assets/city/chicago.jpg';
import paris from '../../../assets/city/paris.jpeg';
import kairo from '../../../assets/city/kairo.jpg';
import singapore from '../../../assets/city/singapore.jpg';

const tileData = [
  {
    id: 1,
    img: seoul,
    title: 'Seoul',
    link: '/search'
  },
  {
    id: 2,
    img: newyork,
    title: 'New York',
    link: '/search'
  },
  {
    id: 3,
    img: berlin,
    title: 'Berlin',
    link: '/search'
  },
  {
    id: 4,
    img: capetown,
    title: 'Cape Town',
    link: '/search'
  },
  {
    id: 5,
    img: chicago,
    title: 'Chicago',
    link: '/search'
  },
  {
    id: 6,
    img: paris,
    title: 'Paris',
    link: '/search'
  },
  {
    id: 7,
    img: kairo,
    title: 'Kairo',
    link: '/search'
  },
  {
    id: 8,
    img: singapore,
    title: 'Singapore',
    link: '/search'
  }
];

const tileData2 = [
  {
    id: 1,
    img: seoul,
    title: 'Seoul',
    location: 'Seoul',
    link: '/search',
    isSuperHost: true,
    rate: 4.93
  },
 
];
export function SearchUI(): React.ReactElement {
  const classes = useStyles();

  return (
    <React.Fragment>
      <NavBar logo={logo} path={'/search'} hasTextField={true} />
      <Filter />
      <div className={classes.content}>
        <div className={classes.instruction}>
          여행 날짜와 게스트 인원수를 입력하면 1박당 총 요금을 확인할 수
          있습니다.
        </div>
        <div className={classes.title}>
          에어비앤비와 함께 전 세계를 여행해보세요
        </div>
        <HorizontalGrid tileData={tileData} />

        <div className={classes.bwtitles}>
          <Typography className={classes.title}>
            최고 평점을 받은 숙소
          </Typography>
          <Typography>
            최고의 평점을 받은 전 세계의 숙소를 둘러보세요.
          </Typography>
        </div>
        <HorizontalGridLarger tileData={tileData2}/>
      </div>
    </React.Fragment>
  );
}
