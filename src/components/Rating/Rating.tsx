import { getStyleClassName } from '../../utils/general';
import { ReactComponent as StarIcon } from '../../assets/icons/star.svg';
import scss from './Rating.module.scss';
import IconBox from '../IconBox/IconBox';
import { ProductRatingStars } from '../../models/products';

interface RatingProps {
  stars: ProductRatingStars;
}

const putNumberOfElementsIntoArray = (value: number) => {
  const array = [];

  for (let i = 0; i < value; i++) {
    array.push(i);
  }

  return array;
};

const Rating: React.FC<RatingProps> = ({ stars }) => {
  return (
    <div className={getStyleClassName(scss, 'rating')}>
      {putNumberOfElementsIntoArray(stars).map(num => (
        <IconBox className={getStyleClassName(scss, 'rating-star')} icon={StarIcon} key={num} />
      ))}
    </div>
  );
};

export default Rating;
