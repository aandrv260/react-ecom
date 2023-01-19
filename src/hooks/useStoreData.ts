import { useCallback, useEffect, useState } from 'react';
import { fetchData } from '../utils/api';

type StoreDataType = 'product' | 'category' | 'categories' | 'products';

interface Config {
  dataType: StoreDataType;
  id?: string | null;
  onDataArrival: (data: any) => void;
  onFail: () => void;
}

const useStoreData = (options: Config) => {
  const { dataType, id, onDataArrival, onFail } = options;
  // const [isLoading, setIsLoading] = useState(true);

  const saveData = useCallback(async () => {
    try {
      const endpoint = id ? `${dataType}/${id}` : dataType;
      const data = await fetchData(endpoint);
      onDataArrival(data);
    } catch (err) {
      if (err instanceof Error) {
        onFail();
        console.log('-------------------');
        console.log('Error occured in `useStoreData` hook');
        console.warn(err.message);
        console.log('-------------------');
      }
    }
  }, [dataType, id, onDataArrival, onFail]);

  useEffect(() => {
    saveData();
  }, [saveData]);

  // return isLoading;
};

export default useStoreData;
