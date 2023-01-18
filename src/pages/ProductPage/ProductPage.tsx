import { useCallback, useState } from 'react';
import ProductDetails from '../../components/ProductDetails/ProductDetails';
import useQuery from '../../hooks/useQuery';
import { ProductData } from '../../models/api';
import Loader from '../../components/Loader/Loader';
import useStoreData from '../../hooks/useStoreData';

const ProductPage: React.FC<{}> = () => {
  const [product, setProduct] = useState<ProductData>();
  const { id } = useQuery('id');
  const dataArrivalHandler = useCallback((data: ProductData) => {
    setProduct(data);
  }, []);

  useStoreData({
    dataType: 'product',
    id,
    onDataArrival: dataArrivalHandler,
  });

  return <>{product ? <ProductDetails product={product || {}} /> : <Loader />}</>;
};

export default ProductPage;
