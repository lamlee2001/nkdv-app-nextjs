import React from 'react';
import HomeIcon from '@mui/icons-material/Home';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import { Typography } from '@mui/material';

import { WrapperStyle } from './style';

const Breadcum: React.FC<{ children: string }> = ({ children }) => {
  return (
    <WrapperStyle>
      <Breadcrumbs aria-label="breadcrumb">
        <HomeIcon className="home-icon" />
        <Typography>{children}</Typography>
      </Breadcrumbs>
    </WrapperStyle>
  );
};

export default Breadcum;
