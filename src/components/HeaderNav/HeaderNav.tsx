import { Link } from 'react-router-dom';
import { HeaderNavMenu } from '../../models/navigation';
import scss from '../../layout/Header/Header.module.scss';
import { generateId, getStyleClassName } from '../../utils/general';

const navMenu: HeaderNavMenu = {
  links: [
    {
      title: 'Home',
      url: '/',
    },

    {
      title: 'Categories',
      url: '/categories',
    },

    {
      title: 'Products',
      url: '/all-products',
    },

    {
      title: 'Contact Us',
      url: '/contact-us',
    },
  ],
};

export default function HeaderNav() {
  return (
    <nav className={getStyleClassName(scss, 'header__nav')}>
      <ul className={getStyleClassName(scss, 'header__nav-list')}>
        {navMenu.links.map(link => (
          <li key={generateId()}>
            <Link className={getStyleClassName(scss, 'header__nav-link')} to={link.url}>
              {link.title}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
