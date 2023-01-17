import scss from './CartSlider.module.scss';
import { formatToCurrency, getStyleClassName } from '../../utils/general';

interface CartSummaryRowProps {
  label: string;
  price: number;
}

const CartSummaryRow: React.FC<CartSummaryRowProps> = ({ label, price }) => {
  return (
    <div className={getStyleClassName(scss, 'cart-slider__summary-row')}>
      <span className={getStyleClassName(scss, 'cart-slider__summary-label')}>{label}</span>
      <span className={getStyleClassName(scss, 'cart-slider__summary-value')}>
        {formatToCurrency(price)}
      </span>
    </div>
  );
};

export default CartSummaryRow;
