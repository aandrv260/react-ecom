import scss from './CartSlider.module.scss';
import { getStyleClassName } from '../../utils/general';
import CartSliderProduct from '../CartSliderProduct/CartSliderProduct';
import { CartItem } from '../../models/cart';

interface CartProductsProps {
  items: CartItem[];
}

const CartProducts: React.FC<CartProductsProps> = ({ items }) => {
  return (
    <div className={getStyleClassName(scss, 'cart-slider__products')}>
      {items.map(cartItem => (
        <CartSliderProduct item={cartItem} key={cartItem.product.id} />
      ))}
    </div>
  );
};

export default CartProducts;
