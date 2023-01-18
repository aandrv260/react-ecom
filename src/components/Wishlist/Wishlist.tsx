import { getStyleClassName } from '../../utils/general';
import scss from './Wishlist.module.scss';
import { useCustomSelector } from '../../store';
import WishlistItems from './WishlistItems';

interface WishlistProps {
  hidden: boolean;
}

const Wishlist: React.FC<WishlistProps> = ({ hidden }) => {
  const wishlist = useCustomSelector(state => state.wishlist);
  const hiddenClassName = hidden ? 'hidden' : '';

  return (
    <div className={getStyleClassName(scss, 'wishlist', hiddenClassName)}>
      {wishlist.items.length === 0 ? (
        <p className={getStyleClassName(scss, 'wishlist__empty')}>
          No items available in your wishlist
        </p>
      ) : (
        <WishlistItems items={wishlist.items} />
      )}
    </div>
  );
};

export default Wishlist;
