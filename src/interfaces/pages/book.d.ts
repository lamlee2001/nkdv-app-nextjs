declare namespace Booking {
  import { FormikProps } from 'formik';
  import { DefaultOptionType } from 'antd/lib/select';

  export interface IBooking {
    open: boolean;
    closable: (val: boolean) => void;
  }

  export interface Hook {
    formik: FormikProps;
    optionsSelect: DefaultOptionType;
  }
}
