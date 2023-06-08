import { useFormik } from 'formik';
import { useTranslation } from 'react-i18next';

import { schemaBook } from './schema';

function useBook(): Booking.Hook {
  const { t } = useTranslation();

  const optionsSelect = [
    { label: t('bookingPage.enter_type_service'), value: '0' },
    { label: t('bookingPage.type_select_service.type_1'), value: '1' },
    { label: t('bookingPage.type_select_service.type_2'), value: '2' },
    { label: t('bookingPage.type_select_service.type_3'), value: '3' },
    { label: t('bookingPage.type_select_service.type_4'), value: '4' },
  ];

  const formik = useFormik({
    initialValues: {
      full_name: '',
      number_phone: '',
      note_of_customer: '',
      type_services: '0',
    },
    validationSchema: schemaBook(t),
    onSubmit() {},
    enableReinitialize: true,
  });

  return { formik, optionsSelect };
}

export default useBook;
