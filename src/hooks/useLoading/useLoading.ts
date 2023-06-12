import { useState } from 'react';

interface ILoading {
  isLoading: boolean;
  setIsLoading: (value: boolean) => void;
}

function useLoading(): ILoading {
  const [isLoading, setIsLoading] = useState(true);

  setTimeout(() => {
    setIsLoading(false);
  }, 1000);

  return { isLoading, setIsLoading };
}

export default useLoading;
