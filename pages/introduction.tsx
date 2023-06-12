import React from 'react';

import useLoading from '@/src/hooks/useLoading/useLoading';
import CircularCard from '@/src/components/circularProgress';
import IntroductionPage from '@/src/pages/introduction';

const Introduction: React.FC = () => {
  const { isLoading } = useLoading();

  return <>{isLoading ? <CircularCard /> : <IntroductionPage />}</>;
};

export default Introduction;
