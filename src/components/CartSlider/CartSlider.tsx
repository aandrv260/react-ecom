import { createPortal } from 'react-dom';
import scss from './CartSlider.module.scss';
import { Cart } from '../../models/cart';
import { getStyleClassName } from '../../utils/general';
import { useDispatch } from 'react-redux/es/hooks/useDispatch';
import { cartActions } from '../../store';
import CartProducts from './CartProducts';
import CartSummary from './CartSummary';
import CartHeader from './CartHeader';

interface CartSliderProps {
  cart: Cart;
  hidden: boolean;
}

/* Later make it possible to extract the cart data directly from the Context API */

const CartSlider: React.FC<CartSliderProps> = ({ cart, hidden }) => {
  const dispatch = useDispatch();

  const cartCloseHandler = () => {
    dispatch(cartActions.closeDrawer());
  };

  return createPortal(
    <div className={getStyleClassName(scss, 'cart-slider', hidden ? 'hidden' : '')}>
      <CartHeader onClose={cartCloseHandler} />
      <CartProducts items={cart.items} />
      <CartSummary total={cart.total} subtotal={cart.subtotal} />
    </div>,
    document.getElementById('cart-slider') as HTMLElement
  );
};

export default CartSlider;
