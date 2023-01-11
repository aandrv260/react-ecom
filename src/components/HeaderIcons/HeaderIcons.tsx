import scss from '../../layout/Header/Header.module.scss';
import { getStyleClassName } from '../../utils/general';
import { ReactComponent as CartIcon } from '../../assets/icons/cartIcon.svg';
import { ReactComponent as HeartIcon } from '../../assets/icons/heartIcon.svg';
import { ReactComponent as AccountIcon } from '../../assets/icons/accountIcon.svg';
import IconBox from '../IconBox/IconBox';

export default function HeaderIcons() {
  return (
    <div className={getStyleClassName(scss, 'header__icons')}>
      <IconBox className={getStyleClassName(scss, 'header__icon-box')} icon={CartIcon} />
      <IconBox className={getStyleClassName(scss, 'header__icon-box')} icon={HeartIcon} />
      <IconBox
        className={getStyleClassName(scss, 'header__icon-box')}
        icon={AccountIcon}
        link="/account"
      />
    </div>
  );
}
