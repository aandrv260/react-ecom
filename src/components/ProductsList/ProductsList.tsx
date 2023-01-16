import { ProductData } from '../../models/api';
import { Product } from '../../models/products';
import Grid from '../Grid/Grid';
import ProductCard from '../ProductCard/ProductCard';
import scss from './ProductsList.module.scss';

interface ProductsListProps {
  products: ProductData[];
}

const ProductsList: React.FC<ProductsListProps> = ({ products }) => {
  return (
    <Grid className="container" columns={3}>
      {products.map(product => (
        <ProductCard
          title={product.title}
          price={product.price}
          comparePrice={product.comparePrice}
          link={`/product/${product.handle}?id=${product.id}`}
          image={product.image}
          key={product.id}
        />
      ))}
    </Grid>
  );
};

export default ProductsList;
