import { Cart } from '../cart';
import { Wishlist } from '../wishlist';

export default interface ReduxStore {
  cart: Cart;
  wishlist: Wishlist;
}
