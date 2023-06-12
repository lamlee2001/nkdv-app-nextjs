import React from 'react';
import useLoading from '@/src/hooks/useLoading/useLoading';

import CircularCard from '@/src/components/circularProgress';

import HomePage from '@/src/pages/home';

const Home: React.FC = () => {
  const { isLoading } = useLoading();

  return <>{isLoading ? <CircularCard /> : <HomePage />}</>;
};

export default Home;
