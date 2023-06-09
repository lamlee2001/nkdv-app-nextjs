import styled from 'styled-components';
import Button from '@mui/material/Button';

export const ButtonBookingStyle = styled(Button)`
  &.btn-booking {
    background-color: #ffffff;
    color: #ff0000;
    font-weight: 600;
    padding: 6px 10px;

    @keyframes dance {
      50% {
        transform: rotate(0) scale(1) skew(1deg);
      }
      30% {
        transform: rotate(-10deg) scale(1) skew(1deg);
      }
      40% {
        transform: rotate(10deg) scale(1) skew(1deg);
      }
    }

    .book-icon {
      animation: dance 1.5s infinite;
      margin-right: 5px;
      font-size: 20px;
    }
  }

  &.btn-booking-mobile {
    position: fixed;
    top: 64px;
    right: 24px;
    z-index: 2;
  }
`;
