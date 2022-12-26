import scss from './CategoryBox.module.scss';
import TEST_BG_IMAGE from '../../assets/images/victor-freitas-WvDYdXDzkhs-unsplash.jpg';
import { getStyleClassName } from '../../utils/general';
import Button from '../Button/Button';

interface CategoryBoxProps {
  title: string;
  link: string;
}

const CategoryBox: React.FC<CategoryBoxProps> = ({ title, link }) => {
  return (
    <div
      className={getStyleClassName(scss, 'category-box')}
      style={{ backgroundImage: `url(${TEST_BG_IMAGE})` }}
      //   style="background-image: url('{{ collection.image | img_url: '1080x' }}');"
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
