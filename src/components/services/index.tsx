import React from 'react';
import Link from 'next/link';
import { useTranslation } from 'react-i18next';
import { Avatar, Button, Grid, Typography } from '@mui/material';
import { StaticImageData } from 'next/image';

import TOOTH_SERVICE from 'src/assets/image/tooth-service-image.png';
import { WrapperContent, WrapperStyle } from './style';

interface Item {
  img: StaticImageData;
  title: string;
  text: string;
  url: string;
}

interface IServices {
  itemService: Item[];
}

const ServicesCard: React.FC<IServices> = ({ itemService }) => {
  const { t } = useTranslation();

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
    <WrapperStyle container className="grid-container">
      {renderService()}
    </WrapperStyle>
  );
};

export default ServicesCard;
