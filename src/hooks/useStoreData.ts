import { useEffect } from 'react';
import { API_ROOT } from '../constants/api';
import { generateId } from '../utils/general';

// Only for testing (for now)
const useStoreData = () => {
  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(API_ROOT);
      const data = await res.json();
      console.log(data);
    };
  });
};

console.log('id', generateId());
export default useStoreData;
