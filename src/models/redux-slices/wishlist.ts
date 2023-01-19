import { ID } from '../general';
import { WishlistItem } from '../wishlist';

export type AddItemToWishlistPayload = {
  item: WishlistItem;
  /**
   * If it's defined, it's called everytime when the item is added to wishlist
   * @param item
   * @returns
   */
  onItemAdded?: (item: WishlistItem) => void;
};
export type RemoveItemTFromWishlistPayload = ID;
