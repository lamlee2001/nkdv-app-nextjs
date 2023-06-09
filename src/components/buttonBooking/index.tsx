import React from 'react';
import { useTranslation } from 'react-i18next';
import BookIcon from '@mui/icons-material/Book';
import { ButtonProps } from '@mui/material/Button';

import useWindowSize from '@/src/hooks/useWindowSize/useWindowSize';

import { ButtonBookingStyle } from './style';

const ButtonBooking: React.FC<{ buttonProps?: ButtonProps }> = ({ buttonProps }) => {
  const { t } = useTranslation();

  const { isMobile } = useWindowSize();

  return (
    <ButtonBookingStyle
      variant="contained"
      className={`btn-booking ${isMobile ? 'btn-booking-mobile' : ''}`}
      {...buttonProps}>
      <BookIcon className="book-icon" />
      {t('book')}
    </ButtonBookingStyle>
  );
};

export default ButtonBooking;
