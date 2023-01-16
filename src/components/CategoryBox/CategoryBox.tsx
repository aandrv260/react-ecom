import scss from './CategoryBox.module.scss';
import { getStyleClassName } from '../../utils/general';
import Button from '../Button/Button';

type CategoryBoxStyle = 'homepage' | 'category-page';

interface CategoryBoxProps {
  title: string;
  link: string;
  bgImage: string;
  boxStyle?: CategoryBoxStyle;
}

const CategoryBox: React.FC<CategoryBoxProps> = ({ title, boxStyle, link, bgImage }) => {
  const curBoxStyle: CategoryBoxStyle = boxStyle || 'homepage';

  return (
    <div
      className={getStyleClassName(scss, 'category-box', `category-box--${curBoxStyle}-style`)}
      style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,.2), rgba(0,0,0,.2)), url(${bgImage})`,
      }}
    >
      <div className={getStyleClassName(scss, 'category-box__info')}>
        <span className={getStyleClassName(scss, 'category-box__category-name')}>{title}</span>

        <Button btnStyle="small" link={link} innerLink>
          Shop now
        </Button>
      </div>
    </div>
  );
};

export default CategoryBox;
