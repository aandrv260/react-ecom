import { Image } from './image';
import { Item } from './products';

export type WishlistItem = Item;

// export interface WishlistItem {
//   id: string;
//   title: string;
//   price: number;
//   comparePrice?: number;
//   image: Image;
// }

export interface Wishlist {
  items: WishlistItem[];
  totalItems: number;
  isHidden: boolean;
}
