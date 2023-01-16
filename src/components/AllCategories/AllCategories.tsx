import scss from './AllCategories.module.scss';
import { generateId, getStyleClassName } from '../../utils/general';
import CategoryBox from '../CategoryBox/CategoryBox';
import Grid from '../Grid/Grid';

const testArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

const AllCategories = () => {
  return (
    <div className="container">
      <Grid className={getStyleClassName(scss, 'all-categories')} columns={4}>
        {testArr.map(() => (
          <CategoryBox
            key={generateId()}
            link="#"
            title="Example categorie"
            bgImage=""
            boxStyle="category-page"
          />
        ))}
      </Grid>
    </div>
  );
};

export default AllCategories;
