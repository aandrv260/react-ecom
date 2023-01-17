import scss from './CartSlider.module.scss';
import { getStyleClassName } from '../../utils/general';
import IconBox from '../IconBox/IconBox';
import { ReactComponent as CloseIcon } from '../../assets/icons/close.svg';

interface CartHeaderProps {
  onClose: () => void;
}

const CartHeader: React.FC<CartHeaderProps> = ({ onClose }) => {
  return (
    <header className={getStyleClassName(scss, 'cart-slider__header')}>
      <span className={getStyleClassName(scss, 'cart-slider__header-label')}>Your Cart</span>
      <IconBox
        className={getStyleClassName(scss, 'cart-slider__close')}
        icon={CloseIcon}
        onClick={onClose}
      />
    </header>
  );
};

export default CartHeader;
