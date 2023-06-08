import React from 'react';
import Typography from '@mui/material/Typography';
import { FieldInputProps } from 'formik';
import { TextFieldProps } from '@mui/material/TextField';

import { TextFieldStyle, Wrapper } from './style';

export interface ITextField {
  label?: string | React.ReactNode;
  field: FieldInputProps<any>;
  textFieldProps?: TextFieldProps;
  touched?: boolean;
  errorText?: string;
  disabled?: boolean;
  callbackOnChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  setFieldValue: (field: any, value: any) => any;
  pattern?: any;
  children?: React.ReactNode;
  ref?: any;
  typeLabel?: 'left' | 'top-left' | 'top-right';
}

const TextField: React.FC<ITextField> = ({
  label,
  touched,
  errorText,
  field,
  textFieldProps,
  disabled,
  pattern,
  ref,
  setFieldValue,
  children,
  callbackOnChange,
  typeLabel,
  ...rest
}) => {
  const onChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    if (pattern) {
      if (e.target.value === '' || pattern.test(e.target.value)) {
        setFieldValue(field.name, e.target.value);
      }
    } else {
      setFieldValue(field.name, e.target.value);
    }

    callbackOnChange?.(e);
  };

  return (
    <Wrapper className={typeLabel}>
      <Typography>{label}</Typography>
      <TextFieldStyle
        error={!!errorText}
        onChange={onChange}
        {...rest}
        {...textFieldProps}
        helperText={errorText ?? errorText}
        disabled={disabled ?? false}
        ref={ref}
      />
    </Wrapper>
  );
};

export default TextField;
