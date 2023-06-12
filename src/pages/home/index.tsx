import React from 'react';
import Carousel from 'react-material-ui-carousel';

import OffersCard from './offers';
import ServiceCard from './services';
import FeedbackCard from './feedback';

import BANNER_1 from 'src/assets/image/banner_1.jpg';
import BANNER_2 from 'src/assets/image/banner_2.jpg';
import BANNER_3 from 'src/assets/image/banner_3.jpg';
import BANNER_4 from 'src/assets/image/banner_4.jpg';
import BANNER_5 from 'src/assets/image/banner_5.jpg';
import { HomePageStyle, WrapperBanner } from './styled';

const HomePage: React.FC = () => {
  const items = [
    {
      name: 'banner 1',
      url: BANNER_1.src,
    },
    {
      name: 'banner 2',
      url: BANNER_2.src,
    },
    {
      name: 'banner 3',
      url: BANNER_3.src,
    },
    {
      name: 'banner 4',
      url: BANNER_4.src,
    },
    {
      name: 'banner 5',
      url: BANNER_5.src,
    },
  ];

  return (
    <HomePageStyle>
      <Carousel swipe={false} indicators={false} className="carousel">
        {items.map((item, i) => (
          <WrapperBanner key={i} background={item.url} />
        ))}
      </Carousel>

      <OffersCard />

      <ServiceCard />

      <FeedbackCard />
    </HomePageStyle>
  );
};

export default HomePage;
