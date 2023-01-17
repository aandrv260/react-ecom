import { configureStore } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useSelector } from 'react-redux';

import ReduxStore from '../models/redux-slices/store';
import cartSlice from './cartSlice';

const store = configureStore({
  reducer: {
    cart: cartSlice.reducer,
  },
});

export const useCustomSelector: TypedUseSelectorHook<ReduxStore> = useSelector;
export default store;
