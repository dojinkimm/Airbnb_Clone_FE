import React from 'react';
import BaseTemplate from 'src/pages/BaseTemplate/BaseTemplate';
import {HorizontalGridLarger, Banner } from 'src/components';
import { useStyles } from './style';

import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';

import banner from 'src/assets/banner.jpg';

import pic1 from '../../../assets/houses/pic1.jpg';
import pic2 from '../../../assets/houses/pic2.jpg';
import pic3 from '../../../assets/houses/pic3.jpg';
import pic4 from '../../../assets/houses/pic4.jpg';
import pic5 from '../../../assets/houses/pic5.jpg';


const tileData2 = [
  {
    id: 1,
    img: pic1,
    title: 'I SETTE CONI - TRULLO EDERA',
    location: '오스투니',
    link: '/search',
    isSuperHost: true,
    rate: 4.93
  },
  {
    id: 2,
    img: pic2,
    title: 'The Joshua Tree House',
    location: '조슈아 트리',
    link: '/search',
    isSuperHost: true,
    rate: 4.92
  },
  {
    id: 3,
    img: pic3,
    title: 'The Mushroom Dome Retreat & LAND of Paradise Suite',
    location: '산타크루즈(Santa Cruz) Aptos',
    link: '/search',
    isSuperHost: true,
    rate: 4.76
  },
  {
    id: 4,
    img: pic4,
    title: 'The World Famous Seashell House ~ Casa Caracol',
    location: '무헤레스 섬',
    link: '/search',
    isSuperHost: true,
    rate: 4.75
  },
  {
    id: 5,
    img: pic5,
    title: 'Romantic Cabana with view',
    location: '아르메니아',
    link: '/search',
    isSuperHost: true,
    rate: 4.87
  }
];
export function SearchUI(): React.ReactElement {
  const classes = useStyles();

  return (
    <BaseTemplate>
      <div className={classes.content}>
        <Typography className={classes.instruction} variant="subtitle1">
          여행 날짜와 게스트 인원수를 입력하면 1박당 총 요금을 확인할 수
          있습니다.
        </Typography>
        <Divider/>

        <Typography className={classes.title} variant="h5">
          에어비앤비와 함께 전 세계를 여행해보세요
        </Typography>
        <Banner bannerImg={banner}/>

        <div className={classes.bwtitles}/>
          <Typography variant="h5" className={classes.title}>
            최고 평점을 받은 숙소
          </Typography>
        <HorizontalGridLarger tileData={tileData2} />
      </div>
    </BaseTemplate>
  );
}
