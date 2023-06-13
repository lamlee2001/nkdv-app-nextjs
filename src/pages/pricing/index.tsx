import React from 'react';
import { Avatar, Divider, Grid, Typography } from '@mui/material';
import Breadcum from '@/src/components/breadcum';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

import MESS_IMG from 'src/assets/image/messenger_image.png';
import ZALO_IMG from 'src/assets/image/zalo_image.png';
import PRICE_1 from 'src/assets/image/price_1.jpg';
import PRICE_2 from 'src/assets/image/price_2.jpg';
import PRICE_3 from 'src/assets/image/price_3.jpg';
import PRICE_4 from 'src/assets/image/price_4.jpg';
import PRICE_5 from 'src/assets/image/price_5.jpg';
import PRICE_6 from 'src/assets/image/price_6.jpg';
import PRICE_7 from 'src/assets/image/price_7.jpg';
import PRICE_9 from 'src/assets/image/price_9.jpg';
import PRICE_10 from 'src/assets/image/price_10.jpg';
import PRICE_11 from 'src/assets/image/price_11.png';
import PRICE_12 from 'src/assets/image/price_12.jpg';
import PRICE_13 from 'src/assets/image/price_13.jpg';
import PRICE_14 from 'src/assets/image/price_14.jpg';
import PRICE_16 from 'src/assets/image/price_16.jpg';
import { PricingPageStyle } from './style';

const PricingPage: React.FC = () => {
  const rows = [
    { image: PRICE_1, type: 'Răng hàm giả tháo lắp', price: '220.000 Đ - 720.000 Đ' },
    { image: PRICE_2, type: 'Trám răng thẩm mỹ', price: '150.000 Đ - 220.000 Đ' },
    { image: PRICE_3, type: 'Điều trị Tủy', price: '400.000 Đ - 720.000 Đ' },
    { image: PRICE_4, type: 'Điều trị viên nha chu', price: '250.000 Đ - 500.000 Đ' },
    { image: PRICE_5, type: 'Tẩy trắng răng bằng đèn LUMA COOL 1 giờ', price: '1.600.000 Đ - 2.350.000 Đ' },
    { image: PRICE_6, type: 'Điều trị cười hở lợi', price: '4.000.000 Đ - 6.000.000 Đ' },
    { image: PRICE_7, type: 'Nhổ răng khôn số 8', price: '720.000 Đ - 2.000.000 Đ' },
    { image: PRICE_9, type: 'Niềng răng - Chỉnh Nha', price: '5.000.000 Đ - 30.000.000 Đ' },
    { image: PRICE_9, type: 'Răng sứ Mỹ', price: '1.000.000 Đ' },
    { image: PRICE_10, type: 'Răng sứ Titan', price: '2.200.000 Đ' },
    { image: PRICE_11, type: 'Răng sứ Ziconia', price: '4.300.000 Đ' },
    { image: PRICE_12, type: 'Răng sứ Cercon', price: '4.900.000 Đ' },
    { image: PRICE_13, type: 'Răng sứ Emax', price: '6.500.000 Đ' },
    { image: PRICE_14, type: 'Răng sứ Venner', price: '8.000.000 Đ' },
    { image: PRICE_16, type: 'Cấy ghép Implant', price: '15.000.000 Đ - 30.000.000 Đ' },
  ];

  return (
    <PricingPageStyle container>
      <Grid item xs={12} className="banner-pricing">
        <Typography className="title fzm-16">Bảng giá</Typography>
      </Grid>

      <Grid container className="content">
        <Grid item xs={12} md={9} className="grid-left">
          <Breadcum>Bảng giá</Breadcum>

          <Typography className="title-content">Bảng giá các dịch vụ tại nha khoa thẩm mỹ Đại Việt</Typography>

          <Divider className="divider" />

          <Grid container>
            <Grid item xs={12} className="grid-image" />
            <Typography className="text-1">Tại Sao Bạn Chọn Chúng Tôi – Nha Khoa Đại Việt Đà Nẵng?</Typography>
            <Typography className="text-2">
              Người ta vẫn thường nói: “muốn có tầm, thì phải có tâm”, do đó Nha Khoa Đại Việt không bao giờ dùng những
              câu từ có cánh hay những câu nói mỹ miều..
            </Typography>
            <Typography>
              Tân trang cho nụ cười không đơn giản là “mặc một chiếc áo mới” cho hàm răng như nhiều khách hàng vẫn nghĩ.
              Bởi nó là cả một quá trình mang tâm huyết, tấm lòng và kinh nghiệm của một người bác sĩ vào từng chiếc
              răng. Bởi chúng tôi luôn quan niệm rằng một cuộc điều trị thành công không chỉ cho một hàm răng thẩm mỹ mà
              còn là sức khỏe và sự an toàn của khách hàng.
            </Typography>
          </Grid>

          <TableContainer component={Paper} className="table">
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell align="left"></TableCell>
                  <TableCell align="left">Loại dịch vụ</TableCell>
                  <TableCell align="left">Giá</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((item, index) => (
                  <TableRow key={index} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                    <TableCell align="left">
                      <Avatar variant="square" src={item.image.src}/>
                    </TableCell>
                    <TableCell align="left">{item.type}</TableCell>
                    <TableCell align="left">{item.price}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Grid>

        <Grid item xs={0} md={3} className="grid-right">
          <Typography className="title-right">Hỗ trợ trực tuyến</Typography>

          <Grid container className="container-right">
            <Typography>Hotline:</Typography>
            <Typography className="phone">0905 644 659</Typography>
            <Grid item xs={12} className="grid-icon">
              <Avatar src={MESS_IMG.src} className="icon" />
              <Avatar src={ZALO_IMG.src} className="icon" />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </PricingPageStyle>
  );
};

export default PricingPage;
