import { useState } from 'react';
import { useDispatch } from 'react-redux';
import scss from '../../layout/Header/Header.module.scss';
import { getStyleClassName } from '../../utils/general';
import { ReactComponent as CartIcon } from '../../assets/icons/cartIcon.svg';
import { ReactComponent as HeartIcon } from '../../assets/icons/heartIcon.svg';
import { ReactComponent as AccountIcon } from '../../assets/icons/accountIcon.svg';
import IconBox from '../IconBox/IconBox';
import Wishlist from '../Wishlist/Wishlist';
import { cartActions } from '../../store/cartSlice';

export default function HeaderIcons() {
  const [wishlistIsOpen, setWishlistIsOpen] = useState<boolean>(false);
  const dispatch = useDispatch();

  const toggleCart = () => {
    dispatch(cartActions.toggleDrawer());
  };

  const wishlistOpenHandler = () => {
    setWishlistIsOpen(prevState => !prevState);
  };

  return (
    <div className={getStyleClassName(scss, 'header__icons')}>
      <div>
        <IconBox
          className={getStyleClassName(scss, 'header__icon-box')}
          icon={CartIcon}
          onClick={toggleCart}
        />
      </div>

      <div style={{ position: 'relative' }}>
        <IconBox
          className={getStyleClassName(scss, 'header__icon-box')}
          icon={HeartIcon}
          onClick={wishlistOpenHandler}
        />
        <Wishlist hidden={wishlistIsOpen} />
      </div>

      <div>
        <IconBox
          className={getStyleClassName(scss, 'header__icon-box')}
          icon={AccountIcon}
          link="/account"
        />
      </div>
    </div>
  );
}
