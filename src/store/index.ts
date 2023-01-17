import { createSlice, PayloadAction, configureStore } from '@reduxjs/toolkit';
import { Cart } from '../models/cart';
import { AddProductPayload } from '../models/redux-slices/cart';
import { getTotalCartPrice } from '../utils/cart';

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

    addProduct(state, action: PayloadAction<AddProductPayload>) {
      const newProduct = action.payload;

      if (!newProduct) return;

      state.items.push(newProduct);
      state.total = getTotalCartPrice(state.items);

      // 1 item is 1 product, not quantity of all products in cart
      state.totalItems++;
    },
  },
});

export const cartActions = cartSlice.actions;

const store = configureStore({
  reducer: {
    cart: cartSlice.reducer,
  },
});

export default store;
