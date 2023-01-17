import { CartItem } from '../models/cart';

export const getTotalCartPrice = (cartItems: CartItem[]) => {
  return cartItems.reduce((acc, curItem) => {
    acc += curItem.product.price * curItem.quantity;
    return acc;
  }, 0);
};
