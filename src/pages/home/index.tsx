import React from 'react';
import Carousel from 'react-material-ui-carousel';
import { Avatar } from '@mui/material';

import OffersCard from './offers';

import { HomePageStyle } from './styled';

const HomePage: React.FC = () => {
  const items = [
    {
      name: 'Rose 1',
      url: 'https://i.vietgiaitri.com/2021/2/13/rose-blackpink-co-suc-hut-co-nao-119-5577110.jpg',
    },
    {
      name: 'Rose 2',
      url: 'https://thuthuatnhanh.com/wp-content/uploads/2021/06/hinh-anh-Rose-Black-Pink-dep-quyen-ru.jpg',
    },
    {
      name: 'Rose 3',
      url: 'https://thuthuatnhanh.com/wp-content/uploads/2021/06/hinh-anh-Rose-Black-Pink-quyen-ru.jpg',
    },
    {
      name: 'Rose 4',
      url: 'https://bloganchoi.com/wp-content/uploads/2022/07/anh-bia-6.jpg',
    },
  ];

  return (
    <HomePageStyle>
      <Carousel swipe={true} indicators={false} className="carousel">
        {items.map((item, i) => (
          <Avatar key={i} src={item.url} variant="square" className="image-slide" />
        ))}
      </Carousel>

      <OffersCard />
    </HomePageStyle>
  );
};

export default HomePage;
