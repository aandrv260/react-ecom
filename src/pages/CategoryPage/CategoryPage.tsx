import { useCallback, useState } from 'react';
import ProductsList from '../../components/ProductsList/ProductsList';
import useQuery from '../../hooks/useQuery';
import useStoreData from '../../hooks/useStoreData';
import { CategoryData } from '../../models/api';

const CategoryPage: React.FC<{}> = () => {
  const [category, setCategory] = useState<CategoryData>();
  const { id } = useQuery('id');

  const dataArrivalHandler = useCallback((data: CategoryData) => {
    setCategory(data);
  }, []);

  useStoreData({
    dataType: 'category',
    id,
    onDataArrival: dataArrivalHandler,
  });

  return (
    <>
      <ProductsList products={category?.products || []} />
    </>
  );
};

export default CategoryPage;
