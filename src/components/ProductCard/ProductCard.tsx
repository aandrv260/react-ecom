import { Link } from 'react-router-dom';
import { Image } from '../../models/image';
import { getStyleClassName } from '../../utils/general';
import Prices from '../PricesBox/PricesBox';
import scss from './ProductCard.module.scss';

interface ProductCardProps {
  title: string;
  link: string;
  image: Image;
  price: number;
  comparePrice: number;
}

const ProductCard: React.FC<ProductCardProps> = ({ title, image, link, price, comparePrice }) => {
  return (
    <Link className={getStyleClassName(scss, 'product-card')} to={link}>
      <img
        className={getStyleClassName(scss, 'product-card__img')}
        src={image.src}
        alt={image.alt || title}
      />
      <h3 className={getStyleClassName(scss, 'product-card__title')}>{title}</h3>
      <Prices price={price} comparePrice={comparePrice} fontSize="small" />
    </Link>
  );
};

export default ProductCard;
