import React from 'react';
import { Avatar, Grid, Typography } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import MapsUgcIcon from '@mui/icons-material/MapsUgc';
import NKDV_LOGO from 'src/assets/image/nkdv_image.png';
import YouTubeIcon from '@mui/icons-material/YouTube';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import EmailIcon from '@mui/icons-material/Email';
import LanguageIcon from '@mui/icons-material/Language';
import PhoneInTalkIcon from '@mui/icons-material/PhoneInTalk';
import AccessTimeIcon from '@mui/icons-material/AccessTime';

import { CoppyRight, FooterLayoutStyle } from './styled';

const FooterLayout: React.FC = () => {
  const itemInfo = [
    { icon: <LocationOnIcon />, text: '350 Nguyễn Hoàng, Thanh khê, Quận thanh khê, Đà nẵng' },
    { icon: <EmailIcon />, text: 'nhakhoadaiviet@gmail.com' },
    { icon: <LanguageIcon />, text: 'https://nkdv-app-nextjs.vercel.app/' },
  ];

  const renderInfo = (): React.ReactNode =>
    itemInfo.map((item, index) => (
      <Grid key={index} className="booking">
        {item.icon}
        {item.text}
      </Grid>
    ));

  return (
    <>
      <FooterLayoutStyle>
        <Grid container className="container">
          <Grid xs={12} md={2} className="grid-item-first">
            <Avatar className="logo-image" variant="square" alt="Remy Sharp" src={NKDV_LOGO.src} />
            <Grid className="grid-icon">
              <FacebookIcon className="icon-network" />
              <MapsUgcIcon className="icon-network" />
              <YouTubeIcon className="icon-network" />
            </Grid>
          </Grid>
          <Grid xs={12} md={6} className="grid-item-second">
            <Typography className="title">Nha khoa đại việt</Typography>
            <Grid className="booking">
              <PhoneInTalkIcon className="icon" />
              Hotline đặt lịch <Typography className="phone">0905 644 659</Typography>
            </Grid>
            {renderInfo()}
          </Grid>
          <Grid xs={12} md={4} className="grid-item-end">
            <Typography className="title">Giờ làm việc</Typography>
            <Typography className="mt-10">Từ thứ 2 đến chủ nhật</Typography>
            <Grid container className="mt-10">
              <AccessTimeIcon className="icon-time" />
              <Typography>8:00 - 18:00</Typography>
            </Grid>
            <Typography className="mt-10">Không làm việc vào các ngày lễ</Typography>
          </Grid>
        </Grid>
      </FooterLayoutStyle>

      <CoppyRight container>
        <Typography align="center">&copy; LamLee, Hue 2023</Typography>
      </CoppyRight>
    </>
  );
};

export default FooterLayout;
