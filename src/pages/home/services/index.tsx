import React from 'react';
import Link from 'next/link';
import { Grid, Typography, Avatar, Button } from '@mui/material';
import { useTranslation } from 'react-i18next';

import DividerTooth from '@/src/components/dividerTooth';

import TOOTH_SERVICE from 'src/assets/image/tooth-service-image.png';
import SERVICE_1 from 'src/assets/image/service_home_1.jpg';
import SERVICE_2 from 'src/assets/image/service_home_2.png';
import SERVICE_3 from 'src/assets/image/service_home_3.jpg';
import SERVICE_4 from 'src/assets/image/service_home_4.jpg';
import SERVICE_5 from 'src/assets/image/service_home_5.jpg';
import SERVICE_6 from 'src/assets/image/service_home_6.jpg';
import { ServicesStyle, WrapperContent } from './styled';

const ServiceCard: React.FC = () => {
  const { t } = useTranslation();

  const itemService = [
    {
      img: SERVICE_1,
      title: t('homePage.item_service.service_1.title'),
      text: t('homePage.item_service.service_1.text'),
      url: '#',
    },
    {
      img: SERVICE_2,
      title: t('homePage.item_service.service_2.title'),
      text: t('homePage.item_service.service_1.text'),
      url: '#',
    },
    {
      img: SERVICE_3,
      title: t('homePage.item_service.service_3.title'),
      text: t('homePage.item_service.service_1.text'),
      url: '#',
    },
    {
      img: SERVICE_4,
      title: t('homePage.item_service.service_4.title'),
      text: t('homePage.item_service.service_1.text'),
      url: '#',
    },
    {
      img: SERVICE_5,
      title: t('homePage.item_service.service_5.title'),
      text: t('homePage.item_service.service_1.text'),
      url: '#',
    },
    {
      img: SERVICE_6,
      title: t('homePage.item_service.service_6.title'),
      text: t('homePage.item_service.service_1.text'),
      url: '#',
    },
  ];

  const renderService = (): React.ReactNode =>
    itemService.map((item, index) => (
      <Grid key={index} className="grid-item" item xs={12} md={6}>
        <Avatar src={item.img.src} variant="square" className="image-item" />

        <WrapperContent>
          <Link href={item.url} className="title fzm-14">
            {item.title}
          </Link>
          <Typography className="text fzm-12">{item.text}</Typography>
          <Button className="see-more">{t('homePage.see_more')}</Button>
        </WrapperContent>
        <Avatar src={TOOTH_SERVICE.src} variant="square" className="icon-tooth" />
      </Grid>
    ));

  return (
    <ServicesStyle container>
      <Grid item xs={12}>
        <Typography className="text-title fzm-16" textAlign="center">
          {t('homePage.services')}
        </Typography>
        <Typography className="text-sub-title fzm-16" textAlign={'center'}>
          {t('homePage.name_dental')}
        </Typography>
      </Grid>

      <DividerTooth />

      <Grid container className="grid-container">
        {renderService()}
      </Grid>
    </ServicesStyle>
  );
};

export default ServiceCard;
