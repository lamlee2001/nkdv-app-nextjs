import * as Yup from 'yup';

export const schemaBook = (t: any): any =>
  Yup.object().shape({
    full_name: Yup.string().nullable().required(t('bookingPage.message.please_enter_full_name')),
    number_phone: Yup.string().nullable().required(t('bookingPage.message.please_enter_number_phone')),
  });
