import React from 'react';
import { Grid, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';

import DividerTooth from '@/src/components/dividerTooth';
import ServicesCard from '@/src/components/services';

import SERVICE_1 from 'src/assets/image/service_home_1.jpg';
import SERVICE_2 from 'src/assets/image/service_home_2.png';
import SERVICE_3 from 'src/assets/image/service_home_3.jpg';
import SERVICE_4 from 'src/assets/image/service_home_4.jpg';
import SERVICE_5 from 'src/assets/image/service_home_5.jpg';
import SERVICE_6 from 'src/assets/image/service_home_6.jpg';
import { ServicesStyle } from './styled';

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
  ];

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

      <ServicesCard itemService={itemService} />
    </ServicesStyle>
  );
};

export default ServiceCard;
