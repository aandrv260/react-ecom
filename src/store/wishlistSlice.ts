import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {
  AddItemToWishlistPayload,
  RemoveItemTFromWishlistPayload,
} from '../models/redux-slices/wishlist';
import { Wishlist } from '../models/wishlist';
import {
  findIndexOfWishlistItemById,
  updateWishlistItemsCount,
  wishlistAlreadyContainsItem,
} from '../utils/wishlist';

const initialState: Wishlist = {
  items: [],
  totalItems: 0,
  isHidden: true,
};

const wishlistSlice = createSlice({
  name: 'wishlist',
  initialState,
  reducers: {
    open(state) {
      state.isHidden = false;
    },

    close(state) {
      state.isHidden = true;
    },

    toggle(state) {
      state.isHidden = !state.isHidden;
    },

    /**
     * Add an item to the wishlist
     * @param state - The wishlist state
     * @param action.payload - `WishlistItem` type
     */
    addItem(state, action: PayloadAction<AddItemToWishlistPayload>) {
      const newItem = action.payload;
      const itemIsAlreadyInWishlist = wishlistAlreadyContainsItem(state, newItem);

      if (itemIsAlreadyInWishlist) return;

      state.items.push(action.payload);
      updateWishlistItemsCount(state);
    },

    removeItem(state, action: PayloadAction<RemoveItemTFromWishlistPayload>) {
      const idOfItemToBeRemoved = action.payload;
      const indexOfItemToBeRemoved = findIndexOfWishlistItemById(state, idOfItemToBeRemoved);

      state.items.splice(indexOfItemToBeRemoved, 1);
      updateWishlistItemsCount(state);

      if (state.totalItems === 0) {
        state.isHidden = true;
      }
    },
  },
});

export const wishlistActions = wishlistSlice.actions;
export default wishlistSlice;
