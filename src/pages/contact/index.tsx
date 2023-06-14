import React from 'react';
import { Divider, Grid, Typography, Button, Stack, Box } from '@mui/material';

import { ContactPageStyle } from './styled';
import Breadcum from '@/src/components/breadcum';
import { useTranslation } from 'react-i18next';
import useContact from './useContact';
import TextField from '@/src/components/textField';

const ContactPage: React.FC = () => {
  const { t } = useTranslation();

  const { formik } = useContact();

  const { getFieldProps, setFieldValue, errors, handleSubmit, isValid, dirty } = formik;

  const itemForm = [
    {
      placeHolder: t('bookingPage.enter_full_name'),
      field: 'full_name',
      label: t('bookingPage.full_name'),
      error: errors.full_name,
    },
    {
      placeHolder: t('bookingPage.enter_number_phone'),
      field: 'number_phone',
      label: t('bookingPage.number_phone'),
      error: errors.number_phone,
    },
    {
      placeHolder: t('bookingPage.enter_note'),
      field: 'note_of_customer',
      label: t('bookingPage.note'),
      error: errors.note_of_customer,
    },
    { placeHolder: t('bookingPage.email'), field: 'email', label: t('bookingPage.email'), error: errors.email },
  ];

  const renderItem = (): React.ReactNode =>
    itemForm.map((item, index) => (
      <TextField
        key={index}
        textFieldProps={{
          placeholder: item.placeHolder ?? '',
        }}
        field={getFieldProps(item.field)}
        setFieldValue={setFieldValue}
        errorText={item.error}
        label={item.label}
      />
    ));

  return (
    <ContactPageStyle container>
      <Grid item xs={12} className="banner-services">
        <Typography className="title fzm-16">Liên Hệ</Typography>
      </Grid>

      <Grid container className="content">
        <Grid item xs={12} className="grid-left">
          <Breadcum>Liên hệ</Breadcum>

          <Typography className="title-content fzm-16">Liên hệ với chúng tôi để được hỗ trợ sớm nhất.</Typography>

          <Divider className="divider" />
        </Grid>

        <Grid container className="container-form">
          <Grid item md={7} xs={12} className="grid-form">
            <Typography className="title">Gửi thông tin liên hệ với chúng tôi</Typography>

            {renderItem()}

            <Stack spacing={2} direction="row" className="stack-btn">
              <Button variant="contained" disabled={!isValid || !dirty} onClick={handleSubmit}>
                {t('bookingPage.send')}
              </Button>
            </Stack>
          </Grid>
          <Grid md={1} xs={0} />
          <Grid item md={4} xs={12} className="grid-info">
            <Box>
              <Typography className="title">Nha khoa Đại Việt</Typography>
              <Typography className="text">Địa chỉ: Số 350 Nguyễn Hoàng, Thanh khê, Đà nẵng</Typography>
              <Typography className="text">Hotline: 0969 641 111</Typography>
              <Typography className="text">Email: nhakhoadaiviet@gmail.com</Typography>
              <Typography className="text">Website: www.nhakhoasaigonquocte.com</Typography>
            </Box>
          </Grid>
        </Grid>
      </Grid>
    </ContactPageStyle>
  );
};

export default ContactPage;
