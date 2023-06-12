import React from 'react';
import { Grid, Typography, Avatar } from '@mui/material';
import Carousel from 'react-material-ui-carousel';
import { useTranslation } from 'react-i18next';

import DividerTooth from '@/src/components/dividerTooth';

import BANNER_6 from 'src/assets/image/banner_6.jpg';
import BANNER_7 from 'src/assets/image/banner_7.jpg';
import BANNER_8 from 'src/assets/image/banner_8.jpg';
import BANNER_9 from 'src/assets/image/banner_9.jpg';
import BANNER_10 from 'src/assets/image/banner_10.jpg';
import BANNER_11 from 'src/assets/image/banner_11.jpg';
import CARD_IMAGE_1 from 'src/assets/image/card_image_1.png';
import CARD_IMAGE_2 from 'src/assets/image/card_image_2.png';
import CARD_IMAGE_3 from 'src/assets/image/card_image_3.png';
import CARD_IMAGE_4 from 'src/assets/image/card_image_4.png';
import CARD_IMAGE_5 from 'src/assets/image/card_image_5.png';
import CARD_IMAGE_6 from 'src/assets/image/card_image_6.png';
import { WrapperStyle } from './styled';

const RecommendCard: React.FC = () => {
  const { t } = useTranslation();

  const itemImage = [
    { src: BANNER_6, alt: 'banner_6' },
    { src: BANNER_7, alt: 'banner_7' },
    { src: BANNER_8, alt: 'banner_8' },
    { src: BANNER_9, alt: 'banner_9' },
    { src: BANNER_10, alt: 'banner_10' },
    { src: BANNER_11, alt: 'banner_11' },
  ];

  const renderImage = (): React.ReactNode =>
    itemImage.map((item, index) => (
      <Avatar key={index} className="image-slider" variant="square" alt={item.alt} src={item.src.src} />
    ));

  const itemCard = [
    { icon: CARD_IMAGE_1, text: t('homePage.text_card.text_1'), alt: 'card-1' },
    { icon: CARD_IMAGE_2, text: t('homePage.text_card.text_2'), alt: 'card-2' },
    { icon: CARD_IMAGE_4, text: t('homePage.text_card.text_3'), alt: 'card-3' },
    { icon: CARD_IMAGE_3, text: t('homePage.text_card.text_4'), alt: 'card-4' },
    { icon: CARD_IMAGE_5, text: t('homePage.text_card.text_5'), alt: 'card-5' },
    { icon: CARD_IMAGE_6, text: t('homePage.text_card.text_6'), alt: 'card-6' },
  ];

  const renderCard = (): React.ReactNode =>
    itemCard.map((item, index) => (
      <Grid key={index} md={4} xs={12} className={`item-card ${index % 2 === 0 ? 'bg-blue' : ''}`}>
        <Grid container>
          <Grid item xs={12} className="center">
            <Avatar key={index} variant="square" className="image-card" alt={item.alt} src={item.icon.src} />
          </Grid>
          <Grid item xs={12} className="center">
            <Typography textAlign="center" className={`${index % 2 === 0 ? 'color-white' : 'color-blue'}`}>
              {item.text}
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    ));

  return (
    <WrapperStyle container>
      <Grid item xs={12}>
        <Typography className="text-title fzm-16" textAlign="center">
          {t('homePage.title_recommend')}
        </Typography>
      </Grid>
      <Grid item xs={12} className="grid-sub-title">
        <Typography className="text-sub-title fzm-16" textAlign={'center'}>
          {t('homePage.sub_title_recommend')}
        </Typography>
      </Grid>

      <DividerTooth />

      <Grid container className="content">
        <Grid item md={6} xs={12} className="grid-slide">
          <Carousel swipe={false} indicators={false} className="carousel">
            {renderImage()}
          </Carousel>
        </Grid>
        <Grid item md={6} xs={12} className="grid-card">
          <Grid container className="grid-card-container">
            {renderCard()}
          </Grid>
        </Grid>
      </Grid>
    </WrapperStyle>
  );
};

export default RecommendCard;
