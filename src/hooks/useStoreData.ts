import { useEffect } from 'react';
import { apiAllProductsURL } from '../constants/api';
import { Product } from '../models/products';
import { generateId } from '../utils/general';

const useStoreData = () => {
  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(apiAllProductsURL);
      const data = await res.json();
      console.log(data);
    };

    fetchData();
  });
};

console.log('id', generateId());
export default useStoreData;
