import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Cart } from '../models/cart';

import {
  AddItemPayload,
  ChangeQuantityPayload,
  RemoveItemPayload,
} from '../models/redux-slices/cart';

import {
  addQuantityToCartItem,
  checkItemAlreadyExistsInCart,
  getCartItemIndexById,
  toggleBodyElementScroll,
  updateCartTotalAmount,
  updateCartTotalAmountAndQuantity,
  updateCartTotalQuantity,
} from '../utils/cart';

const initialCartState: Cart = {
  items: [],
  subtotal: 0,
  total: 0,
  totalItems: 0,
  isHidden: true,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState: initialCartState,
  reducers: {
    /**
     * Show the cart drawer
     */
    openDrawer(state) {
      state.isHidden = false;
      toggleBodyElementScroll('hide');
    },

    /**
     * Hide the cart drawer
     */
    closeDrawer(state) {
      state.isHidden = true;
      toggleBodyElementScroll('show');
    },

    /**
     * Toggle the cart drawer
     */
    toggleDrawer(state) {
      state.isHidden = !state.isHidden;
      toggleBodyElementScroll(state.isHidden ? 'show' : 'hide');
    },

    /**
     * Adds an item to the cart
     * @param state - The cart slice state
     * @param action.payload `CartItem` type
     */
    addItem(state, action: PayloadAction<AddItemPayload>) {
      const newItem = action.payload;

      if (!newItem) return;

      const { index, itemExistsInCart } = checkItemAlreadyExistsInCart(state, newItem);

      if (itemExistsInCart) {
        addQuantityToCartItem(state, index);
        updateCartTotalAmount(state);
        return;
      }

      state.items.push(newItem);
      updateCartTotalAmountAndQuantity(state);

      // Open drawer to let the user check the cart
      cartSlice.caseReducers.openDrawer(state);
    },

    /**
     * Removes an item from the cart
     * @param state - The cart slice state
     * @param action.payload The id of the product in the cart item that should be deleted
     */
    removeItem(state, action: PayloadAction<RemoveItemPayload>) {
      const itemId = action.payload;
      const indexOfItemToRemove = getCartItemIndexById(state, itemId);

      if (indexOfItemToRemove === -1) {
        console.error(`No item found based on the id provided. ID: ${itemId}`);
        return;
      }

      state.items.splice(indexOfItemToRemove, 1);
      updateCartTotalAmountAndQuantity(state);
    },

    /**
     * Updates a cart item's `quantity` property.
     * Warning: This will overwrite the cart item's existing `quantity` property.
     * @param state - The cart slice state
     * @param action.payload An object which contains the id and the new quantity of the item
     */
    changeQuantity(state, action: PayloadAction<ChangeQuantityPayload>) {
      const { id: itemId, newQuantity } = action.payload;
      const indexOfItemToBeEdited = getCartItemIndexById(state, itemId);

      if (indexOfItemToBeEdited === -1) {
        console.error('No item found that matches the id provided.');
        return;
      }

      // Delete the cart item if new quantity is <= 0
      if (newQuantity <= 0) {
        state.items.splice(indexOfItemToBeEdited, 1);
        updateCartTotalAmount(state);
        updateCartTotalQuantity(state);
        return;
      }

      state.items[indexOfItemToBeEdited].quantity = newQuantity;
      updateCartTotalAmountAndQuantity(state);
    },
  },
});

export const cartActions = cartSlice.actions;
export default cartSlice;