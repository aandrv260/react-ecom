import { formatToCurrency, getStyleClassName } from '../../utils/general';
import scss from './PricesBox.module.scss';

interface PricesProps {
  price: number;
  comparePrice?: number;
  fontSize?: 'small' | 'medium' | 'large';
}

const Prices: React.FC<PricesProps> = ({ price, comparePrice, fontSize }) => {
  const fontSizeClassName = `price--${fontSize || 'medium'}`;

  return comparePrice ? (
    <div className={getStyleClassName(scss, 'prices')}>
      <span className={getStyleClassName(scss, 'price__compare', fontSizeClassName)}>
        {formatToCurrency(comparePrice)}
      </span>

      <span className={getStyleClassName(scss, 'price__main', fontSizeClassName)}>
        {formatToCurrency(price)}
      </span>
    </div>
  ) : (
    <span className={getStyleClassName(scss, 'price__main', fontSizeClassName)}>
      {formatToCurrency(price)}
    </span>
  );
};

export default Prices;
