import scss from './SaveToWishlistIcon.module.scss';
import { Item } from '../../models/products';
import { ReactComponent as HeartIcon } from '../../assets/icons/heartIcon.svg';
import IconBox from '../IconBox/IconBox';
import { getStyleClassName } from '../../utils/general';
import { useDispatch } from 'react-redux';
import { wishlistActions } from '../../store/wishlistSlice';
import { useCustomSelector } from '../../store';
import { wishlistAlreadyContainsItem } from '../../utils/wishlist';
import { useMemo } from 'react';

interface SaveToWishlistIconProps {
  item: Item;
}

const SaveToWishlistIcon: React.FC<SaveToWishlistIconProps> = ({ item }) => {
  const dispatch = useDispatch();
  const wishlist = useCustomSelector(state => state.wishlist);

  // It shouldn't call wishlistAlreadyContainsItem() on each component re-evaluation because it's O(n) complexity
  const isItemInWishlist = useMemo(() => {
    return wishlistAlreadyContainsItem(wishlist, item);
  }, [wishlist, item]);

  const itemIsWishlistedClassName = isItemInWishlist ? 'item-wishlisted' : '';

  const saveOrRemoveItemFromWishlistHandler = (
    event: React.MouseEvent<HTMLDivElement | HTMLAnchorElement>
  ) => {
    event.preventDefault();

    if (isItemInWishlist) {
      dispatch(wishlistActions.removeItem(item.id));
      return;
    }

    dispatch(wishlistActions.addItem(item));
  };

  return (
    <IconBox
      className={getStyleClassName(scss, 'save-to-wishlist-icon', itemIsWishlistedClassName)}
      icon={HeartIcon}
      onClick={saveOrRemoveItemFromWishlistHandler}
    />
  );
};

export default SaveToWishlistIcon;
