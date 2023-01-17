import { Cart, CartItem } from '../models/cart';

interface ItemExists {
  itemExistsInCart: boolean;
  index: number;
}

export const getTotalCartPrice = (cartItems: CartItem[]) => {
  return cartItems.reduce((acc, curItem) => {
    acc += curItem.product.price * curItem.quantity;
    return acc;
  }, 0);
};

export const checkItemAlreadyExistsInCart = (cartState: Cart, cartItem: CartItem): ItemExists => {
  const indexOfCurItemInCart = cartState.items.findIndex(
    curItem => curItem.product.id === cartItem.product.id
  );

  return {
    itemExistsInCart: indexOfCurItemInCart !== -1,
    index: indexOfCurItemInCart,
  };
};

/**
 * This must only be used in Reducer functions because it overwrites parts of the existing state
 * @param state - The whole cart state slice
 * @param cartItem - The new item that is being added to the cart
 */
export const addQuantityToCartItem = (cartState: Cart, indexOfItem: number) => {
  //   if (!indexOfCurItemInCart && indexOfCurItemInCart > 0) return;
  cartState.items[indexOfItem].quantity++;
};

export const updateCartTotalAmount = (cartState: Cart) => {
  cartState.total = getTotalCartPrice(cartState.items);
};

export const updateCartTotalQuantity = (cartState: Cart) => {
  cartState.totalItems = cartState.items.length;
};

export const getCartItemById = (state: Cart, id: string): CartItem | undefined => {
  return state.items.find(curItem => curItem.product.id === id);
};

export const getCartItemIndexById = (state: Cart, id: string): number => {
  return state.items.findIndex(curItem => curItem.product.id === id);
};

export const updateCartTotalAmountAndQuantity = (cartState: Cart) => {
  updateCartTotalAmount(cartState);
  updateCartTotalQuantity(cartState);
};
