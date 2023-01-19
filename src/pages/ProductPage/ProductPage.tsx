import { useCallback, useState } from 'react';
import ProductDetails from '../../components/ProductDetails/ProductDetails';
import useQuery from '../../hooks/useQuery';
import { ProductData } from '../../models/api';
import Loader from '../../components/Loader/Loader';
import useStoreData from '../../hooks/useStoreData';
import useDataFailed from '../../hooks/useDataFailed';
import FailMessage from '../../components/FailMessage/FailMessage';
import PageContent from '../../components/PageContent/PageContent';

const ProductPage: React.FC<{}> = () => {
  const [product, setProduct] = useState<ProductData>();
  const { dataFailed, markDataAsFailedToFetch } = useDataFailed();
  const { id } = useQuery('id');
  const dataArrivalHandler = useCallback((data: ProductData) => {
    setProduct(data);
  }, []);

  useStoreData({
    dataType: 'product',
    id,
    onDataArrival: dataArrivalHandler,
    onFail: markDataAsFailedToFetch,
  });

  return (
    <>
      <PageContent
        dataFailure={{
          hasFailed: dataFailed,
          message: 'Product data failed to fetch. Please try again later.',
        }}
      >
        {product ? <ProductDetails product={product || {}} /> : <Loader />}
      </PageContent>
      {/* {dataFailed ? (
        <FailMessage message="Product data failed to fetch. Please try again later." />
      ) : (
        <>
          {product && <ProductDetails product={product || {}} />}
          {!product && <Loader />}
        </>
      )} */}
    </>
  );
};

export default ProductPage;
