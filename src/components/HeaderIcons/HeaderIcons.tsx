import scss from '../../layout/Header/Header.module.scss';
import { getStyleClassName } from '../../utils/general';
import { ReactComponent as CartIcon } from '../../assets/icons/cartIcon.svg';
import { ReactComponent as HeartIcon } from '../../assets/icons/heartIcon.svg';

export default function HeaderIcons() {
  return (
    <div className={getStyleClassName(scss, 'header__icons')}>
      <div className={getStyleClassName(scss, 'header__icon-box')}>
        <CartIcon />
      </div>

      <div className={getStyleClassName(scss, 'header__icon-box')}>
        <HeartIcon />
      </div>
    </div>
  );
}
