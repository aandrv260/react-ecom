import scss from './CartSlider.module.scss';
import { getStyleClassName } from '../../utils/general';
import CartSummaryRow from './CartSummaryRow';

interface CartSummaryProps {
  total: number;
  subtotal: number;
}

const CartSummary: React.FC<CartSummaryProps> = ({ total, subtotal }) => {
  return (
    <footer className={getStyleClassName(scss, 'cart-slider__summary')}>
      <CartSummaryRow label="Subtotal" price={subtotal} />
      <CartSummaryRow label="Total" price={total} />
    </footer>
  );
};

export default CartSummary;
