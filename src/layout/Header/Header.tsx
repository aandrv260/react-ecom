import HeaderIcons from '../../components/HeaderIcons/HeaderIcons';
import HeaderNav from '../../components/HeaderNav/HeaderNav';
import HeaderSearch from '../../components/HeaderSearch/HeaderSearch';
import LanguageSwitcher from '../../components/LanguageSwitcher/LanguageSwitcher';
import { getStyleClassName } from '../../utils/general';
import scss from './Header.module.scss';

export default function Header() {
  return (
    <header className={getStyleClassName(scss, 'header')}>
      {/* Top part */}
      <div className={getStyleClassName(scss, 'header__top')}>
        <LanguageSwitcher />
        <HeaderSearch />
      </div>

      {/* Bottom part */}
      <div className={getStyleClassName(scss, 'header__bottom')}>
        {/* Logo */}
        <div className={getStyleClassName(scss, 'header__img-box')}>
          {/* TODO: Add logo */}
          Logo
        </div>

        <HeaderNav />
        <HeaderIcons />
      </div>
    </header>
  );
}
