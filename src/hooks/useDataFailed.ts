import { useCallback, useState } from 'react';

const useDataFailed = () => {
  const [dataFailed, setDataFailed] = useState(false);

  // To prevent unnecessary re-renders because this function will be used in useEffect inside useStoreData custom hook
  const markDataAsFailedToFetch = useCallback(() => {
    setDataFailed(true);
  }, []);

  return {
    dataFailed,
    markDataAsFailedToFetch,
  };
};

export default useDataFailed;
