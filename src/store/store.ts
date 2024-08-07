import { configureStore } from '@reduxjs/toolkit';
import { apiSlice } from './apiSlice';
import { searchSlice } from './searchSlice';
import selectedItemsSlice from './selectedItemsSlice';
import paginationSlice from './paginationSlice';

export const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    search: searchSlice.reducer,
    selectedItems: selectedItemsSlice,
    pagination: paginationSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
