import { useFormik } from 'formik';
import { useTranslation } from 'react-i18next';

import { schemaBook } from './schema';

function useContact(): Contact.Hook {
  const { t } = useTranslation();

  const formik = useFormik({
    initialValues: {
      full_name: '',
      number_phone: '',
      note_of_customer: '',
      email: '',
    },
    validationSchema: schemaBook(t),
    onSubmit() {},
    enableReinitialize: true,
  });

  return { formik };
}

export default useContact;
