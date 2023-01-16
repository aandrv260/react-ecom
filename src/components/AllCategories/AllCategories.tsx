import scss from './AllCategories.module.scss';
import { generateId, getStyleClassName } from '../../utils/general';
import CategoryBox from '../CategoryBox/CategoryBox';

const testArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

const AllCategories = () => {
  return (
    <div className="container">
      <div className={`grid grid--4-cols ${getStyleClassName(scss, 'all-categories')}`}>
        {testArr.map(() => (
          <CategoryBox
            key={generateId()}
            link="#"
            title="Example categorie"
            bgImage=""
            boxStyle="category-page"
          />
        ))}
      </div>
    </div>
  );
};

export default AllCategories;
