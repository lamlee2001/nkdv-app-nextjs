import React from 'react';

import useLoading from '@/src/hooks/useLoading/useLoading';
import CircularCard from '@/src/components/circularProgress';
import PricingPage from '@/src/pages/pricing';

const Pricing: React.FC = () => {
  const { isLoading } = useLoading();

  return <>{isLoading ? <CircularCard /> : <PricingPage />}</>;
};

export default Pricing;
