import scss from './MobileNav.module.scss';
import { createPortal } from 'react-dom';
import { generateId, getStyleClassName } from '../../utils/general';
import { ReactComponent as CloseIcon } from '../../assets/icons/close.svg';
import IconBox from '../IconBox/IconBox';
import { headerNavMenu } from '../../assets/data/navigation';
import { Link } from 'react-router-dom';

const mobileNavWrapper = document.getElementById('mobile-nav') as HTMLElement;

interface MobileNavProps {
  isHidden: boolean;
  onClose: () => void;
}

const MobileNav: React.FC<MobileNavProps> = ({ isHidden, onClose }) => {
  const hiddenClassName = isHidden ? 'hidden' : '';

  return createPortal(
    <div className={getStyleClassName(scss, 'mobile-nav', hiddenClassName)}>
      <header className={getStyleClassName(scss, 'mobile-nav__header')}>
        <h4 className={getStyleClassName(scss, 'mobile-nav__heading')}>Menu</h4>

        <IconBox
          className={getStyleClassName(scss, 'mobile-nav__icon-close')}
          icon={CloseIcon}
          onClick={onClose}
        />
      </header>

      <div className={getStyleClassName(scss, 'mobile-nav__menu-content')}>
        <ul>
          {headerNavMenu.links.map(link => (
            <li className={getStyleClassName(scss, 'mobile-nav__list-item')} key={generateId()}>
              <Link to={link.url} onClick={onClose}>
                {link.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>,

    mobileNavWrapper
  );
};

export default MobileNav;
