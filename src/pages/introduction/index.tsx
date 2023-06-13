import React from 'react';
import { Grid, Typography, Divider, Avatar } from '@mui/material';
import Breadcum from '@/src/components/breadcum';

import BANNER_9 from 'src/assets/image/banner_9.jpg';
import ABOUT_1 from 'src/assets/image/about_1.jpg';
import ABOUT_2 from 'src/assets/image/about_2.jpg';
import ABOUT_3 from 'src/assets/image/about_3.jpg';
import ABOUT_4 from 'src/assets/image/about_4.jpg';
import ABOUT_5 from 'src/assets/image/about_5.jpg';
import ABOUT_6 from 'src/assets/image/about_6.jpg';
import ABOUT_7 from 'src/assets/image/about_7.jpg';
import ABOUT_8 from 'src/assets/image/about_8.jpg';
import { IntroductionPageStyle } from './style';

const IntroductionPage: React.FC = () => {
  return (
    <IntroductionPageStyle container>
      <Grid item xs={12} className="banner-about">
        <Typography className="title fzm-16">Nha Khoa Đại Việt</Typography>
      </Grid>
      <Grid container className="content">
        <Grid item xs={12} md={8} className="grid-left">
          <Breadcum>About</Breadcum>

          <Typography className="title-content">Về chúng tôi</Typography>

          <Divider className="divider" />

          <Typography>
            Chúng tôi tự hào là một trong những nha khoa chuyên sâu trong nước đạt chuẩn quốc tế và có uy tín tại thành
            phố ĐÀ NẴNG. Với tâm huyết của đội ngũ bác sĩ tay nghề chuyên sâu trong bệnh viện Nha Khoa Đại Việt chúng
            tôi chuyển giao công nghệ hiện đại tiên tiến – bác sĩ chuyên môn cao, tâm huyết với nghề.
          </Typography>

          <Avatar src={BANNER_9.src} variant="square" className="banner-9" />

          <Typography>
            Hệ thống máy móc không ngừng cải tiến – chất lượng dịch vụ đạt chuẩn quốc tế, Nha Khoa uy tín ĐÀ NẴNG - NHA
            KHOA Đại Việt cam kết luôn mang đến những giá trị phục vụ tốt nhất cho khách hàng và bệnh nhân, là lựa chọn
            uy tín cho nụ cười trọn vẹn của bạn.
          </Typography>

          <Grid container>
            <Avatar src={ABOUT_1.src} variant="square" className="about-image" />
            <Avatar src={ABOUT_2.src} variant="square" className="about-image" />
          </Grid>

          <Typography>
            Thành lập từ năm 2011 với mục tiêu phát triển thương hiệu, làm hài lòng ngay cả những bệnh nhân khó tính
            nhất, đem đến nụ cười hoàn hảo hơn cho khách hàng. Chúng tôi đã phát triển hệ thống trên khắp cả nước,hàng
            năm tiếp nhận hàng trăm nghìn khách hàng và giải quyết nhiều ca phức tạp. Đến với Thành Phố Đà Nẵng chúng
            tôi đã cố gắng cải tiến không ngừng chuyển giao công nghệ với các bệnh viện răng hàm mặt tại SÀI GÒN và các
            bác sĩ liên tục tham gia nhiều hội thảo QUỐC TẾ .Tất cả những dịch vụ mới nhất, hoàn thiện nhất chúng tôi
            đều cập nhật và đem tới ĐÀ NẴNG công nghệ tiên tiến hiện đại nhất .
          </Typography>

          <Grid container>
            <Avatar src={ABOUT_3.src} variant="square" className="about-image-2" />
            <Avatar src={ABOUT_4.src} variant="square" className="about-image-2" />
            <Avatar src={ABOUT_5.src} variant="square" className="about-image-2" />
            <Avatar src={ABOUT_6.src} variant="square" className="about-image-2" />
            <Avatar src={ABOUT_7.src} variant="square" className="about-image-2" />
            <Avatar src={ABOUT_8.src} variant="square" className="about-image-2" />
          </Grid>

          <Typography align="center" className="text-end">
            Những hình ảnh Học - Làm & tư vấn cho khách hàng đến từ Nha Khoa Đại Việt
          </Typography>

          <Typography>
            Cám ơn khách hàng ở Đà Nẵng đã dành cho nha khoa tại đà nẵng - Nha Khoa Đại Việt một sự tin tưởng đáng trân
            trọng.Chúng tôi xin hứa sẽ cố gắng hết mình, phấn đấu không ngừng để traning nhiều công nghệ tiên tiến hơn
            nữa nhằm phục vụ tốt nhất cho khách hàng ĐÀ NẴNG đã tin tưởng nha khoa trong thời gian qua.
          </Typography>
        </Grid>

        <Grid item xs={0} md={4}>
          hi
        </Grid>
      </Grid>
    </IntroductionPageStyle>
  );
};

export default IntroductionPage;
