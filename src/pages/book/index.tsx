import React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useTranslation } from 'react-i18next';
import Avatar from '@mui/material/Avatar';

import TextField from '@/src/components/textField';
import ModalCard from '@/src/components/modal';
import useBook from './useBook';
import SelectField from '@/src/components/select';

import { BookPageStyle, ImageStyle } from './styled';

const BookPage: React.FC<Booking.IBooking> = ({ open, closable }) => {
  const { t } = useTranslation();

  const { formik, optionsSelect } = useBook();

  const { getFieldProps, setFieldValue, errors, handleSubmit, isValid, dirty, touched } = formik;

  return (
    <ModalCard open={open} closable={closable}>
      <ImageStyle sx={{ display: { xs: 'none', md: 'flex' } }}>
        <Avatar
          className="avt-booking"
          variant="square"
          alt="img-booking"
          src={
            'https://scontent.fsgn2-7.fna.fbcdn.net/v/t39.30808-6/350117497_790252065755225_3379356921458289568_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=jjLm0VUDEg4AX-qKwEW&_nc_ht=scontent.fsgn2-7.fna&oh=00_AfDW5ug0JF5dpP-jkNI6s0zSLmqZMK5377s1dTeIOdWnhg&oe=648785B2'
          }
        />
      </ImageStyle>
      <BookPageStyle className="book-page">
        <Typography className="title">{t('book')}</Typography>

        <TextField
          textFieldProps={{
            placeholder: t('bookingPage.enter_full_name') ?? '',
          }}
          field={getFieldProps('full_name')}
          setFieldValue={setFieldValue}
          errorText={errors.full_name}
          label={t('bookingPage.full_name')}
          touched={touched.full_name}
        />
        <TextField
          textFieldProps={{
            placeholder: t('bookingPage.enter_number_phone') ?? '',
          }}
          field={getFieldProps('number_phone')}
          setFieldValue={setFieldValue}
          errorText={errors.number_phone}
          label={t('bookingPage.number_phone')}
          touched={touched.number_phone}
        />
        <SelectField
          field={getFieldProps('type_services')}
          optionsSelect={optionsSelect}
          setFieldValue={setFieldValue}
          selectProps={{
            placeholder: t('bookingPage.enter_type_service') ?? '',
          }}
          error={errors.type_services}
          touched={touched.type_services}
          label={t('bookingPage.service_type') ?? ''}
        />
        <TextField
          textFieldProps={{
            placeholder: t('bookingPage.enter_note') ?? '',
          }}
          field={getFieldProps('note_of_customer')}
          setFieldValue={setFieldValue}
          errorText={errors.note_of_customer}
          label={t('bookingPage.note')}
          touched={touched.note_of_customer}
        />
        <Stack spacing={2} direction="row" className="stack-btn">
          <Button variant="contained" disabled={!isValid || !dirty} onClick={handleSubmit}>
            {t('bookingPage.send')}
          </Button>
          <Button variant="contained" onClick={() => closable(false)}>
            {t('bookingPage.cancel')}
          </Button>
        </Stack>
      </BookPageStyle>
    </ModalCard>
  );
};

export default BookPage;
