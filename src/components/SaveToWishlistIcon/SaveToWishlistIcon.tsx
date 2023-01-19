import scss from './SaveToWishlistIcon.module.scss';
import { Item } from '../../models/products';
import { ReactComponent as HeartIcon } from '../../assets/icons/heartIcon.svg';
import IconBox from '../IconBox/IconBox';
import { getStyleClassName } from '../../utils/general';
import { useDispatch } from 'react-redux';
import { wishlistActions } from '../../store/wishlistSlice';
import { useCustomSelector } from '../../store';
import { wishlistAlreadyContainsItem } from '../../utils/wishlist';
import { useContext, useMemo } from 'react';
import { PopupContext } from '../../context/PopupContext';

interface SaveToWishlistIconProps {
  item: Item;
}

const SaveToWishlistIcon: React.FC<SaveToWishlistIconProps> = ({ item }) => {
  const dispatch = useDispatch();
  const wishlist = useCustomSelector(state => state.wishlist);
  const popupContext = useContext(PopupContext);

  // It shouldn't call wishlistAlreadyContainsItem() on each component re-evaluation because it's O(n) complexity
  const isItemInWishlist = useMemo(() => {
    return wishlistAlreadyContainsItem(wishlist, item);
  }, [wishlist, item]);

  const itemIsWishlistedClassName = isItemInWishlist ? 'item-wishlisted' : '';

  const showPopupOnAddToWishlist = () => {
    popupContext.updateContent("You've added this item to your wishlist", item);
    popupContext.open();
  };

  const saveOrRemoveItemFromWishlistHandler = (
    event: React.MouseEvent<HTMLDivElement | HTMLAnchorElement>
  ) => {
    event.preventDefault();

    if (isItemInWishlist) {
      dispatch(wishlistActions.removeItem(item.id));
      return;
    }

    dispatch(wishlistActions.addItem({ item, onItemAdded: showPopupOnAddToWishlist }));
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
