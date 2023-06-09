import React from 'react';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import { Avatar, Divider, Grid, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';

import TOOTH_IMAGE from 'src/assets/image/tooth-image.png';
import { BoxStyle, OffersStyle } from './styled';

const OffersCard: React.FC = () => {
  const { t } = useTranslation();

  const itemOffers = [
    {
      urlAvatar: 'https://tapchilamdep.com/wp-content/uploads/2019/10/Rose-887x1024.jpg',
      title: t('homePage.item_offers.offer_1.title'),
      content: [
        t('homePage.item_offers.offer_1.text_1'),
        t('homePage.item_offers.offer_1.text_2'),
        t('homePage.item_offers.offer_1.text_3'),
      ],
    },
    {
      urlAvatar:
        'https://danviet.mediacdn.vn/zoom/700_438/2020/11/4/lisa-blackpink-160444886213712136820-crop-1604449325972318319495.jpg',
      title: t('homePage.item_offers.offer_2.title'),
      content: [
        t('homePage.item_offers.offer_2.text_1'),
        t('homePage.item_offers.offer_2.text_2'),
        t('homePage.item_offers.offer_2.text_3'),
      ],
    },
    {
      urlAvatar: 'https://upload.wikimedia.org/wikipedia/commons/9/93/Jisoo_in_2022.jpg',
      title: t('homePage.item_offers.offer_2.title'),
      content: [
        t('homePage.item_offers.offer_3.text_1'),
        t('homePage.item_offers.offer_3.text_2'),
        t('homePage.item_offers.offer_3.text_3'),
      ],
    },
    {
      urlAvatar:
        'https://nhadepso.com/wp-content/uploads/2023/02/me-man-55-hinh-anh-jennie-de-thuong-cuc-dang-yeu-an-tuong-nhat_1.jpg',
      title: t('homePage.item_offers.offer_2.title'),
      content: [
        t('homePage.item_offers.offer_4.text_1'),
        t('homePage.item_offers.offer_4.text_2'),
        t('homePage.item_offers.offer_4.text_3'),
      ],
    },
  ];

  const renderItemOffers = (): React.ReactNode =>
    itemOffers.map((item, index) => (
      <Grid key={index} className="item-offers" item xs={6} md={3}>
        <div>
          <Avatar src={item.urlAvatar} className="image-offers" />
          <BoxStyle>
            <Typography className="title-offers fzm-14">{item.title}</Typography>
            {item.content.map((item, index) => (
              <>
                <Typography key={index} className="fzm-14">
                  <PlayArrowIcon className="icon-arrow" />
                  {item}
                </Typography>
                <Divider className="divider" />
              </>
            ))}
          </BoxStyle>
        </div>
      </Grid>
    ));

  return (
    <OffersStyle container>
      <Grid item xs={12} className="grid-item">
        <Typography className="text-title fzm-16" textAlign="center">
          {t('homePage.title_1').toLocaleUpperCase()}
        </Typography>
        <Typography className="text-title text-2 fzm-16" textAlign={'center'}>
          {t('homePage.title_2').toLocaleUpperCase()}
        </Typography>
      </Grid>

      <Grid item xs={12} className="grid-item divider">
        <Typography className="text-before" />
        <Avatar src={TOOTH_IMAGE.src} className="image-tooth" variant="square" />
        <Typography className="text-affter" />
      </Grid>

      <Grid container className="grid-item grid-item-offers">
        {renderItemOffers()}
      </Grid>
    </OffersStyle>
  );
};

export default OffersCard;
