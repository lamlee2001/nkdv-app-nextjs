import React from 'react';

import useLoading from '@/src/hooks/useLoading/useLoading';
import CircularCard from '@/src/components/circularProgress';
import ServicesPage from '@/src/pages/services';

const Services: React.FC = () => {
  const { isLoading } = useLoading();

  return <>{isLoading ? <CircularCard /> : <ServicesPage />}</>;
};

export default Services;
