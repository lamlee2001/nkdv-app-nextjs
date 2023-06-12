import React from 'react';

import useLoading from '@/src/hooks/useLoading/useLoading';
import CircularCard from '@/src/components/circularProgress';
import ContactPage from '@/src/pages/contact';

const Contact: React.FC = () => {
  const { isLoading } = useLoading();

  return <>{isLoading ? <CircularCard /> : <ContactPage />}</>;
};

export default Contact;
