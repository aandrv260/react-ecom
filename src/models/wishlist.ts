import { Item } from './products';

export type WishlistItem = Item;

export interface Wishlist {
  items: WishlistItem[];
  totalItems: number;
  isHidden: boolean;
}
