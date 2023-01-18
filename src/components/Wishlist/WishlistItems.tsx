import { useDispatch } from 'react-redux';
import { AnyAction, Dispatch } from 'redux';
import { Item } from '../../models/products';
import { WishlistItem } from '../../models/wishlist';
import { cartActions } from '../../store/cartSlice';
import { wishlistActions } from '../../store/wishlistSlice';
import { createNewCartItem } from '../../utils/cart';
import PopupItem from '../PopupItem/PopupItem';
import scss from './Wishlist.module.scss';

interface WishlistItemsProps {
  items: WishlistItem[];
}

const WishlistItems: React.FC<WishlistItemsProps> = ({ items }) => {
  const dispatch = useDispatch();

  const addToCartHandler = (item: Item) => {
    const newCartItem = createNewCartItem(item);
    dispatch(cartActions.addItem(newCartItem));
  };

  return (
    <>
      {items.map(item => (
        <PopupItem
          item={item}
          key={item.id}
          button={{ text: 'Add to cart', onClick: () => addToCartHandler(item) }}
        />
      ))}
    </>
  );
};

export default WishlistItems;
