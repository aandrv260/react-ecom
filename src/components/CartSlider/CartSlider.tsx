import { useRef } from 'react';
import { createPortal } from 'react-dom';
import scss from './CartSlider.module.scss';
import { Cart } from '../../models/cart';
import { getStyleClassName } from '../../utils/general';
import { useDispatch } from 'react-redux/es/hooks/useDispatch';
import CartProducts from './CartProducts';
import CartSummary from './CartSummary';
import CartHeader from './CartHeader';
import Overlay from '../Overlay/Overlay';
import { cartActions } from '../../store/cartSlice';

interface CartSliderProps {
  cart: Cart;
  hidden: boolean;
}

/* Later make it possible to extract the cart data directly from the Context API */

const CartSlider: React.FC<CartSliderProps> = ({ cart, hidden }) => {
  const cartWrapperRef = useRef<HTMLDivElement>(null);
  const dispatch = useDispatch();

  const cartCloseHandler = () => {
    dispatch(cartActions.closeDrawer());
  };

  return createPortal(
    <Overlay hidden={hidden}>
      <div
        className={getStyleClassName(scss, 'cart-slider', hidden ? 'hidden' : '')}
        ref={cartWrapperRef}
      >
        <CartHeader onClose={cartCloseHandler} />
        <CartProducts items={cart.items} />
        <CartSummary total={cart.total} subtotal={cart.subtotal} />
      </div>
    </Overlay>,
    document.getElementById('cart-slider') as HTMLElement
  );
};

export default CartSlider;
