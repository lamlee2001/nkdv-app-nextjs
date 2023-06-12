import React from 'react';
import { Avatar, Grid, Rating, Typography } from '@mui/material';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination } from 'swiper';
import { useTranslation } from 'react-i18next';
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

import DividerTooth from '@/src/components/dividerTooth';

import ROSE_IMAGE from 'src/assets/image/rose_image.jpg';
import LISA_IMAGE from 'src/assets/image/lisa_image.jpg';
import JISOO_IMAGE from 'src/assets/image/jisoo_image.jpg';
import JENNIE_IMAGE from 'src/assets/image/jennie_image.jpg';
import { FeedbackStyle } from './styled';

const FeedbackCard: React.FC = () => {
  const { t } = useTranslation();
  const itemFeeback = [
    { image: ROSE_IMAGE, content: t('homePage.content_feedback.content_1'), name: 'Rosé' },
    { image: LISA_IMAGE, content: t('homePage.content_feedback.content_2'), name: 'Lisa' },
    { image: JISOO_IMAGE, content: t('homePage.content_feedback.content_3'), name: 'Jisoo' },
    { image: JENNIE_IMAGE, content: t('homePage.content_feedback.content_4'), name: 'Jennie' },
  ];

  const renderFeedback = (): React.ReactNode =>
    itemFeeback.map((item, index) => (
      <SwiperSlide key={index} className="swiper-item">
        <Grid container>
          <Grid item xs={12} className="grid-item-image">
            <Avatar className="image" src={item.image.src} />
            <FormatQuoteIcon className="quote-icon" />
          </Grid>
          <Grid item xs={12} className="grid-item-rating">
            <Rating name="read-only" value={5} readOnly />
          </Grid>
          <Grid item xs={12} className="grid-item-content">
            <Typography textAlign="center">{item.content}</Typography>
          </Grid>
          <Grid item xs={12} className="grid-item-name">
            <Typography textAlign="center">{item.name}</Typography>
          </Grid>
        </Grid>
      </SwiperSlide>
    ));

  return (
    <FeedbackStyle container>
      <Grid item xs={12}>
        <Typography className="text-title fzm-16" textAlign="center">
          {t('homePage.feedback_customer')}
        </Typography>
      </Grid>
      <Grid item xs={12} className="grid-sub-title">
        <Typography className="text-sub-title fzm-16" textAlign={'center'}>
          {t('homePage.sub_feedback')}
        </Typography>
      </Grid>

      <DividerTooth />

      <Grid item xs={12} className="slider">
        <Swiper
          effect={'coverflow'}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={'auto'}
          autoplay={{ delay: 2000 }}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          initialSlide={1}
          pagination={true}
          modules={[EffectCoverflow, Pagination]}
          className="mySwiper">
          {renderFeedback()}
        </Swiper>
      </Grid>
    </FeedbackStyle>
  );
};

export default FeedbackCard;
