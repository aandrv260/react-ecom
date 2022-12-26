import CategoryBox from '../../components/CategoryBox/CategoryBox';
import scss from './CategoriesSection.module.scss';
import { getStyleClassName } from '../../utils/general';

const content = [
  {
    title: 'Women',
    link: '#',
  },

  {
    title: 'Men',
    link: '#',
  },

  {
    title: 'Kids',
    link: '#',
  },
];

export default function CategoriesSection() {
  return (
    <section className={`${getStyleClassName(scss, 'categories-section')} container`}>
      {content.map(card => (
        <CategoryBox key={Math.random()} title={card.title} link={card.link} />
      ))}
    </section>
  );
}
