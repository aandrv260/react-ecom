import { useCallback, useEffect } from 'react';
import { CategoryData } from '../models/api';
import { fetchData } from '../utils/api';

type StoreDataType = 'product' | 'category' | 'categories' | 'products';

interface Config {
  dataType: StoreDataType;
  id?: string | null;
  onDataArrival: (data: any) => void;
}

const useStoreData = (options: Config) => {
  const { dataType, id, onDataArrival } = options;

  const saveData = useCallback(async () => {
    const endpoint = id ? `${dataType}/${id}` : dataType;
    const data = await fetchData(endpoint);
    onDataArrival(data);
  }, [dataType, id, onDataArrival]);

  useEffect(() => {
    saveData();
  }, [saveData]);
};

export default useStoreData;
