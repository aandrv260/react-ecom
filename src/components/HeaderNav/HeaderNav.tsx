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
      title: 'All categories',
      url: '/all-categories',
    },

    {
      title: 'All products',
      url: '/all-products',
    },
  ],
};

export default function HeaderNav() {
  return (
    <nav className={getStyleClassName(scss, 'header__nav')}>
      <ul className={getStyleClassName(scss, 'header__nav-list')}>
        {navMenu.links.map(link => (
          <li key={generateId()}>
            <a className={getStyleClassName(scss, 'header__nav-link')} href={link.url}>
              {link.title}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
