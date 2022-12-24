import LanguageSwitcher from '../../components/LanguageSwitcher/LanguageSwitcher';
import { getStyleClassName } from '../../utils/general';
import scss from './Header.module.scss';

export default function Header() {
  return (
    <header className={getStyleClassName(scss, 'header', 'header--test', 'ange')}>
      {/* Top part */}
      <div className={getStyleClassName(scss, 'header__top')}>
        <LanguageSwitcher />
      </div>

      {/* Bottom part */}
      <div className={getStyleClassName(scss, 'header__bottom')}></div>
    </header>
  );
}
