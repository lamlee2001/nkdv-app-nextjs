import React from 'react';
import { Typography, Avatar } from '@mui/material';

import ToothCard from '@/src/assets/card/toothCard';

import { DividerToothStyle } from './style';

const DividerTooth: React.FC = () => {
  return (
    <DividerToothStyle>
      <Typography className="text-before" />
      <Avatar component={ToothCard} className="image-tooth" variant="square" />
      <Typography className="text-affter" />
    </DividerToothStyle>
  );
};

export default DividerTooth;
