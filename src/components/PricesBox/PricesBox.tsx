import { formatToCurrency, getStyleClassName } from '../../utils/general';
import scss from './PricesBox.module.scss';

interface PricesProps {
  className?: string;
  price: number;
  comparePrice?: number;
  fontSize?: 'small' | 'medium' | 'large';
}

const Prices: React.FC<PricesProps> = ({ price, comparePrice, fontSize, className }) => {
  const fontSizeClassName = `price--${fontSize || 'medium'}`;
  const classNameWithComparePrice = getStyleClassName(scss, 'prices');
  const classNameWithoutComparePrice = getStyleClassName(scss, 'price__main', fontSizeClassName);
  const finalClassName = `${
    comparePrice ? classNameWithComparePrice : classNameWithoutComparePrice
  } ${className}`.trim();

  return comparePrice ? (
    <div className={finalClassName}>
      <span className={getStyleClassName(scss, 'price__compare', fontSizeClassName)}>
        {formatToCurrency(comparePrice)}
      </span>

      <span className={getStyleClassName(scss, 'price__main', fontSizeClassName)}>
        {formatToCurrency(price)}
      </span>
    </div>
  ) : (
    <span className={finalClassName}>{formatToCurrency(price)}</span>
  );
};

export default Prices;
