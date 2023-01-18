import { WishlistItem } from '../../models/wishlist';
import { getStyleClassName } from '../../utils/general';
import scss from './Wishlist.module.scss';
import WishlistItems from './WishlistItems';

interface WishlistProps {
  items: WishlistItem[];
  hidden: boolean;
}

const Wishlist: React.FC<WishlistProps> = ({ hidden, items }) => {
  const hiddenClassName = hidden ? 'hidden' : '';
  console.log(hidden);

  return (
    <div className={getStyleClassName(scss, 'wishlist', hiddenClassName)}>
      {items.length === 0 ? (
        <p className={getStyleClassName(scss, 'wishlist__empty')}>
          No items available in your wishlist
        </p>
      ) : (
        <WishlistItems items={items} />
      )}
    </div>
  );
};

export default Wishlist;
