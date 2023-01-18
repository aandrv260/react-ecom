import { configureStore } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useSelector } from 'react-redux';

import ReduxStore from '../models/redux-slices/store';
import cartSlice from './cartSlice';
import wishlistSlice from './wishlistSlice';

const store = configureStore({
  reducer: {
    cart: cartSlice.reducer,
    wishlist: wishlistSlice.reducer,
  },
});

export const useCustomSelector: TypedUseSelectorHook<ReduxStore> = useSelector;
export default store;
