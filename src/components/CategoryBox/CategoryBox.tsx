import scss from './CategoryBox.module.scss';
import TEST_BG_IMAGE from '../../assets/images/victor-freitas-WvDYdXDzkhs-unsplash.jpg';
import { getStyleClassName } from '../../utils/general';
import Button from '../Button/Button';

type CategoryBoxStyle = 'homepage' | 'category-page';

interface CategoryBoxProps {
  title: string;
  link: string;
  boxStyle?: CategoryBoxStyle;
}

const CategoryBox: React.FC<CategoryBoxProps> = ({ title, boxStyle, link }) => {
  const curBoxStyle: CategoryBoxStyle = boxStyle || 'homepage';

  return (
    <div
      className={getStyleClassName(scss, 'category-box', `category-box--${curBoxStyle}-style`)}
      style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,.2), rgba(0,0,0,.2)), url(${TEST_BG_IMAGE})`,
      }}
    >
      <div className={getStyleClassName(scss, 'category-box__info')}>
        <span className={getStyleClassName(scss, 'category-box__category-name')}>{title}</span>

        <Button btnStyle="small" link={link}>
          Shop now
        </Button>
      </div>
    </div>
  );
};

export default CategoryBox;
