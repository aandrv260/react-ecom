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
      title: 'Men',
      url: '/category/men?id=men_jcupdelqe1rpxtsb8pa73a',
    },

    {
      title: 'Women',
      url: '/category/men?id=women_ad8tor0tcyspzo4o9f6mcp',
    },

    {
      title: 'Products',
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
            <Link className={getStyleClassName(scss, 'header__nav-link')} to={link.url}>
              {link.title}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
