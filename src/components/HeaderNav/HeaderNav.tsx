import { Link } from 'react-router-dom';
import scss from '../../layout/Header/Header.module.scss';
import { generateId, getStyleClassName } from '../../utils/general';
import { headerNavMenu } from '../../assets/data/navigation';

const HeaderNav = () => {
  return (
    <nav className={getStyleClassName(scss, 'header__nav')}>
      <ul className={getStyleClassName(scss, 'header__nav-list')}>
        {headerNavMenu.links.map(link => (
          <li key={generateId()}>
            <Link className={getStyleClassName(scss, 'header__nav-link')} to={link.url}>
              {link.title}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default HeaderNav;
