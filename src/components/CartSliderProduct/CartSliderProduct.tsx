import scss from './CartSliderProduct.module.scss';
import { Product } from '../../models/products';
import { getStyleClassName } from '../../utils/general';
import ImageBox from '../ImageBox/ImageBox';

interface CartSliderProductProps {
  product: Product;
}

const CartSliderProduct: React.FC<CartSliderProductProps> = ({ product }) => {
  return (
    <div className={getStyleClassName(scss, 'cart-slider-product')}>
      <ImageBox
        className={getStyleClassName(scss, 'cart-slider-product__img-box')}
        image={product.image}
      />

      <div className={getStyleClassName(scss, 'cart-slider-product__info-box')}>
        {product.comparePrice ? (
          <div className={getStyleClassName(scss, 'cart-slider-product__price-box')}>
            <span className={getStyleClassName(scss, 'cart-slider-product__compare-price')}>
              {product.comparePrice}
            </span>

            <span className={getStyleClassName(scss, 'cart-slider-product__price')}>
              {product.price}
            </span>
          </div>
        ) : (
          <span className={getStyleClassName(scss, 'cart-slider-product__price')}>
            {product.price}
          </span>
        )}
      </div>
    </div>
  );
};

export default CartSliderProduct;
