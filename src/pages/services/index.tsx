import React from 'react';
import { Divider, Grid, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';

import Breadcum from '@/src/components/breadcum';
import ServicesCard from '@/src/components/services';

import SERVICE_1 from 'src/assets/image/service_home_1.jpg';
import SERVICE_2 from 'src/assets/image/service_home_2.png';
import SERVICE_3 from 'src/assets/image/service_home_3.jpg';
import SERVICE_4 from 'src/assets/image/service_home_4.jpg';
import SERVICE_5 from 'src/assets/image/service_home_5.jpg';
import SERVICE_6 from 'src/assets/image/service_home_6.jpg';
import SERVICE_7 from 'src/assets/image/price_3.jpg';
import SERVICE_8 from 'src/assets/image/about_5.jpg';
import { ServicesPageStyle } from './style';

const ServicesPage: React.FC = () => {
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
      text: t('homePage.item_service.service_2.text'),
      url: '#',
    },
    {
      img: SERVICE_3,
      title: t('homePage.item_service.service_3.title'),
      text: t('homePage.item_service.service_3.text'),
      url: '#',
    },
    {
      img: SERVICE_4,
      title: t('homePage.item_service.service_4.title'),
      text: t('homePage.item_service.service_4.text'),
      url: '#',
    },
    {
      img: SERVICE_5,
      title: t('homePage.item_service.service_5.title'),
      text: t('homePage.item_service.service_5.text'),
      url: '#',
    },
    {
      img: SERVICE_6,
      title: t('homePage.item_service.service_6.title'),
      text: t('homePage.item_service.service_6.text'),
      url: '#',
    },
    {
      img: SERVICE_7,
      title: t('homePage.item_service.service_7.title'),
      text: t('homePage.item_service.service_7.text'),
      url: '#',
    },
    {
      img: SERVICE_8,
      title: t('homePage.item_service.service_8.title'),
      text: t('homePage.item_service.service_8.text'),
      url: '#',
    },
  ];

  return (
    <ServicesPageStyle container>
      <Grid item xs={12} className="banner-services">
        <Typography className="title fzm-16">Dịch vụ</Typography>
      </Grid>

      <Grid container className="content">
        <Grid item xs={12} className="grid-left">
          <Breadcum>Dịch vụ</Breadcum>

          <Typography className="title-content fzm-16">
            Nha Khoa Đại Việt luôn mang đến các dịch vụ tốt nhất cho khách hàng.
          </Typography>

          <Divider className="divider" />
        </Grid>

        <ServicesCard itemService={itemService} />
      </Grid>
    </ServicesPageStyle>
  );
};

export default ServicesPage;
