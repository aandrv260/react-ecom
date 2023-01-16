import { useEffect, useMemo, useState } from 'react';
import { useParams } from 'react-router-dom';
import ProductDetails from '../../components/ProductDetails/ProductDetails';
import { Product } from '../../models/products';
import img1 from '../../assets/images/testimonials/ben.jpg';
import useQuery from '../../hooks/useQuery';
import { ProductData } from '../../models/api';
import { getProductData } from '../../utils/api';
import Loader from '../../components/Loader/Loader';

// const testProducts: Product[] = [
//   {
//     id: 1,
//     handle: 'my-first-product',
//     description:
//       'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sunt, fugiat accusamus modi quam porro ad labore culpa ratione corrupti tempore similique pariatur error assumenda sed atque tenetur laborum corporis quas, distinctio et? Tempora nostrum dolore quas suscipit accusantium voluptate pariatur, cum neque, minima asperiores fugiat repellendus aperiam ab molestias iste?',
//     category: {
//       id: 'c1',
//       title: '',
//     },
//     price: 111,
//     comparePrice: 121,
//     title: 'Example product 1',
//     image: { alt: '', src: img1 },
//     quantity: 3,
//     ratingStars: 5,
//     url: '/product/my-first-product',
//   },
// ];

// console.log(testProducts);
// console.log(1 - 1);

const ProductPage: React.FC<{}> = () => {
  const [product, setProduct] = useState<ProductData>();
  // TODO: Make it extract the product from the allProducts array from the Context API
  const { id } = useQuery('id');

  useEffect(() => {
    const productId = id || '';
    getProductData(productId, data => {
      setProduct(data);
    });
  }, [id]);

  // const product: Product = useMemo(
  //   () => testProducts.filter(product => product.handle === handle)[0],
  //   [handle]
  // );
  // console.log(handle);

  return <>{product ? <ProductDetails product={product || {}} /> : <Loader />}</>;
};

export default ProductPage;
