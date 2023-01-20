import { useState } from 'react';
import HeaderIcons from '../../components/HeaderIcons/HeaderIcons';
import HeaderNav from '../../components/HeaderNav/HeaderNav';
import HeaderSearch from '../../components/HeaderSearch/HeaderSearch';
import LanguageSwitcher from '../../components/LanguageSwitcher/LanguageSwitcher';
import Logo from '../../components/Logo/Logo';
import MenuIcon from '../../components/MenuIcon/MenuIcon';
import MobileNav from '../../components/MobileNav/MobileNav';
import { getStyleClassName } from '../../utils/general';
import scss from './Header.module.scss';

export default function Header() {
  const [isMobileNavActive, setIsMobileNavActive] = useState(false);

  const openMobileMenu = () => {
    setIsMobileNavActive(true);
  };

  const closeMobileMenu = () => {
    setIsMobileNavActive(false);
  };

  return (
    <header className={getStyleClassName(scss, 'header')}>
      {/* Top part */}
      <div className={getStyleClassName(scss, 'header__top')}>
        <LanguageSwitcher />
        <HeaderSearch />
      </div>

      {/* Bottom part */}
      <div className={getStyleClassName(scss, 'header__bottom')}>
        <MobileNav isHidden={!isMobileNavActive} onClose={closeMobileMenu} />

        <MenuIcon
          className={getStyleClassName(scss, 'header__menu-icon')}
          menuOpen={false}
          onClick={openMobileMenu}
        />
        {/* Logo */}

        {/* TODO: When you create the logo, import the Logo component and use it here */}
        <div className={getStyleClassName(scss, 'header__img-box')}>Logo</div>

        <HeaderNav />
        <HeaderIcons />
      </div>
    </header>
  );
}
