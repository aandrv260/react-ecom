import { createPortal } from 'react-dom';
import scss from './CartSlider.module.scss';
import { Cart } from '../../models/cart';
import { Product } from '../../models/products';
import { generateId, getStyleClassName } from '../../utils/general';
import CartSliderProduct from '../CartSliderProduct/CartSliderProduct';
import { ReactComponent as CloseIcon } from '../../assets/icons/close.svg';
import IconBox from '../IconBox/IconBox';

interface CartSliderProps {
  cart: Cart;
}

/* Later make it possible to extract the cart data directly from the Context API */

const CartSlider: React.FC<CartSliderProps> = ({ cart }) => {
  const allProducts = cart.items;
  console.log(1);
  return createPortal(
    <div className={getStyleClassName(scss, 'cart-slider')}>
      <header className={getStyleClassName(scss, 'cart-slider__header')}>
        <span className={getStyleClassName(scss, 'cart-slider__header-label')}>Your Cart</span>
        <IconBox className={getStyleClassName(scss, 'cart-slider__close')} icon={CloseIcon} />
      </header>

      <div className={getStyleClassName(scss, 'cart-slider__products')}>
        {allProducts.map(product => (
          <CartSliderProduct product={product} key={generateId()} />
        ))}
      </div>
    </div>,
    document.getElementById('cart-slider')!
  );
};

export default CartSlider;
