import { createSlice, PayloadAction, configureStore } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useSelector } from 'react-redux';
import { Cart } from '../models/cart';
import { AddItemPayload, RemoveItemPayload } from '../models/redux-slices/cart';
import ReduxStore from '../models/redux-slices/store';
import {
  addQuantityToCartItem,
  checkItemAlreadyExistsInCart,
  getCartItemById,
  getCartItemIndexById,
  getTotalCartPrice,
  updateCartTotalAmount,
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
    openDrawer(state) {
      state.isHidden = false;
    },

    closeDrawer(state) {
      state.isHidden = true;
    },

    toggleDrawer(state) {
      state.isHidden = !state.isHidden;
    },

    addItem(state, action: PayloadAction<AddItemPayload>) {
      const newItem = action.payload;

      if (!newItem) return;

      const { index, itemExistsInCart } = checkItemAlreadyExistsInCart(state, newItem);

      if (itemExistsInCart) {
        // state.items[index].quantity++;
        addQuantityToCartItem(state, index);
        updateCartTotalAmount(state);
        return;
      }

      state.items.push(newItem);
      updateCartTotalAmount(state);
      updateCartTotalQuantity(state);

      // Open drawer to let the user check the cart
      cartSlice.caseReducers.openDrawer(state);
    },

    removeItem(state, action: PayloadAction<RemoveItemPayload>) {
      const itemId = action.payload;
      const indexOfItemToRemove = getCartItemIndexById(state, itemId);

      if (indexOfItemToRemove === -1) {
        console.error(`No item found based on the id provided. ID: ${itemId}`);
        return;
      }

      state.items.splice(indexOfItemToRemove, 1);
      updateCartTotalAmount(state);
      updateCartTotalQuantity(state);
    },
  },
});

export const cartActions = cartSlice.actions;
export const useCustomSelector: TypedUseSelectorHook<ReduxStore> = useSelector;

const store = configureStore({
  reducer: {
    cart: cartSlice.reducer,
  },
});

export default store;
