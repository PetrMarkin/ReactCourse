import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Result, SelectedItemsState } from '../interfaces/interfaces';

const initialState: SelectedItemsState = {
  selectedItems: [],
};

const selectedItemsSlice = createSlice({
  name: 'selectedItems',
  initialState,
  reducers: {
    selectItem: (state, action: PayloadAction<Result>) => {
      if (
        !state.selectedItems.some((item) => item.url === action.payload.url)
      ) {
        state.selectedItems.push(action.payload);
      }
    },
    deselectItem: (state, action: PayloadAction<string>) => {
      state.selectedItems = state.selectedItems.filter(
        (item) => item.url !== action.payload,
      );
    },
    clearSelectedItems: (state) => {
      state.selectedItems = [];
    },
  },
});

export const { selectItem, deselectItem, clearSelectedItems } =
  selectedItemsSlice.actions;

export default selectedItemsSlice.reducer;
