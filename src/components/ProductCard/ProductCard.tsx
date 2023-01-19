import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Image } from '../../models/image';
import { getStyleClassName } from '../../utils/general';
import Loader from '../Loader/Loader';
import Prices from '../PricesBox/PricesBox';
import SaveToWishlistIcon from '../SaveToWishlistIcon/SaveToWishlistIcon';
import scss from './ProductCard.module.scss';

interface ProductCardProps {
  id: string;
  title: string;
  link: string;
  image: Image;
  price: number;
  comparePrice?: number;
}

const ProductCard: React.FC<ProductCardProps> = ({
  title,
  image,
  link,
  price,
  comparePrice,
  id,
}) => {
  const [imageHasLoaded, setImageHasLoaded] = useState(false);
  const hideImageClassName = !imageHasLoaded ? 'hidden' : '';

  const imageFinishedLoadingHandler: React.ReactEventHandler<HTMLImageElement> = () => {
    setImageHasLoaded(true);
  };

  return (
    <Link className={getStyleClassName(scss, 'product-card')} to={link}>
      <div className={getStyleClassName(scss, 'product-card__img-box')}>
        {!imageHasLoaded && <Loader />}

        <img
          className={getStyleClassName(scss, 'product-card__img', hideImageClassName)}
          src={image.src}
          alt={image.alt || title}
          onLoad={imageFinishedLoadingHandler}
        />

        <SaveToWishlistIcon item={{ id, image, price, title, comparePrice }} />
      </div>
      <h3 className={getStyleClassName(scss, 'product-card__title')}>{title}</h3>
      <Prices price={price} comparePrice={comparePrice} fontSize="small" />
    </Link>
  );
};

export default ProductCard;
