import { useCallback, useState } from 'react';
import FailMessage from '../../components/FailMessage/FailMessage';
import ProductsList from '../../components/ProductsList/ProductsList';
import useDataFailed from '../../hooks/useDataFailed';
import useQuery from '../../hooks/useQuery';
import useStoreData from '../../hooks/useStoreData';
import { CategoryData } from '../../models/api';

const CategoryPage: React.FC<{}> = () => {
  const [category, setCategory] = useState<CategoryData>();
  const { dataFailed, markDataAsFailedToFetch } = useDataFailed();
  const { id } = useQuery('id');

  const dataArrivalHandler = useCallback((data: CategoryData) => {
    setCategory(data);
  }, []);

  useStoreData({
    dataType: 'category',
    id,
    onDataArrival: dataArrivalHandler,
    onFail: markDataAsFailedToFetch,
  });

  return (
    <>
      {dataFailed ? (
        <FailMessage message="Products data failed to fetch. Please try again later" />
      ) : (
        <ProductsList products={category?.products || []} />
      )}
    </>
  );
};

export default CategoryPage;
