import { Product } from '../../models/products';
import { getStyleClassName } from '../../utils/general';
import Button from '../Button/Button';
import Prices from '../PricesBox/PricesBox';
import scss from './Wishlist.module.scss';

interface WishlistItemProps {
  item: Product;
}

const WishlistItem: React.FC<WishlistItemProps> = ({ item }) => {
  return (
    <div className={getStyleClassName(scss, 'wishlist-item')}>
      <div className={getStyleClassName(scss, 'wishlist-item__info')}>
        <div className={getStyleClassName(scss, 'wishlist-item__img-box')}>
          <img src={item.image.src} alt={item.image.alt} />
        </div>

        <div>
          <h4 className={getStyleClassName(scss, 'wishlist-item__title')}>{item.title}</h4>
          <Prices price={item.price} comparePrice={item.comparePrice} fontSize="small" />
        </div>
      </div>
      <Button btnStyle="full">Add to cart</Button>
    </div>
  );
};

export default WishlistItem;
