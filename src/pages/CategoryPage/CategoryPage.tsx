import { useEffect, useState } from 'react';
import { useParams, useSearchParams } from 'react-router-dom';
import ProductsList from '../../components/ProductsList/ProductsList';
import useQuery from '../../hooks/useQuery';
import { CategoryData } from '../../models/api';
import { getCategoryData } from '../../utils/api';

const CategoryPage: React.FC<{}> = () => {
  const [category, setCategory] = useState<CategoryData>();
  const { id } = useQuery('id');

  console.log(id);

  useEffect(() => {
    if (!id) {
      throw new Error('Id does not exist');
    }

    getCategoryData(id, data => {
      setCategory(data);
      console.log('data prods', data);
    });
  }, [id]);

  return (
    <>
      <ProductsList products={category?.products || []} />
    </>
  );
};

export default CategoryPage;
