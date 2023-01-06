import { createPortal } from 'react-dom';
import scss from './CartSlider.module.scss';
import { Cart } from '../../models/cart';
import { Product } from '../../models/products';
import { formatToCurrency, generateId, getStyleClassName } from '../../utils/general';
import CartSliderProduct from '../CartSliderProduct/CartSliderProduct';
import { ReactComponent as CloseIcon } from '../../assets/icons/close.svg';
import IconBox from '../IconBox/IconBox';

interface CartSliderProps {
  cart: Cart;
  hidden: boolean;
}

/* Later make it possible to extract the cart data directly from the Context API */

const CartSlider: React.FC<CartSliderProps> = ({ cart, hidden }) => {
  const allProducts = cart.items;

  return createPortal(
    <div className={getStyleClassName(scss, 'cart-slider', hidden ? 'hidden' : '')}>
      <header className={getStyleClassName(scss, 'cart-slider__header')}>
        <span className={getStyleClassName(scss, 'cart-slider__header-label')}>Your Cart</span>
        <IconBox className={getStyleClassName(scss, 'cart-slider__close')} icon={CloseIcon} />
      </header>

      {/* Products section */}
      <div className={getStyleClassName(scss, 'cart-slider__products')}>
        {allProducts.map(product => (
          <CartSliderProduct product={product} key={generateId()} />
        ))}
      </div>

      {/* Cart summary section */}
      <footer className={getStyleClassName(scss, 'cart-slider__summary')}>
        <div className={getStyleClassName(scss, 'cart-slider__summary-row')}>
          <span className={getStyleClassName(scss, 'cart-slider__summary-label')}>Subtotal</span>
          <span className={getStyleClassName(scss, 'cart-slider__summary-value')}>
            {formatToCurrency(cart.subtotal)}
          </span>
        </div>

        <div className={getStyleClassName(scss, 'cart-slider__summary-row')}>
          <span className={getStyleClassName(scss, 'cart-slider__summary-label')}>Shipping</span>
          <span className={getStyleClassName(scss, 'cart-slider__summary-value')}>
            {formatToCurrency(cart.shippingPrice)}
          </span>
        </div>

        <div className={getStyleClassName(scss, 'cart-slider__summary-row')}>
          <span className={getStyleClassName(scss, 'cart-slider__summary-label')}>Total</span>
          <span className={getStyleClassName(scss, 'cart-slider__summary-value')}>
            {formatToCurrency(cart.total)}
          </span>
        </div>
      </footer>
    </div>,
    document.getElementById('cart-slider')!
  );
};

export default CartSlider;
