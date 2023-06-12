import React from 'react';
import CircularProgress from '@mui/material/CircularProgress';

import { BoxStyle } from './styled';

const CircularCard: React.FC = () => {
  return (
    <BoxStyle>
      <CircularProgress />
    </BoxStyle>
  );
};

export default CircularCard;
