import React from 'react';

import { ContentLayoutStyle } from './style';

const ContentLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return <ContentLayoutStyle>{children}</ContentLayoutStyle>;
};

export default ContentLayout;
