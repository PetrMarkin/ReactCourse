import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { PaginationState } from '../interfaces/interfaces';

const initialState: PaginationState = {
  currentPage: 1,
};

const paginationSlice = createSlice({
  name: 'pagination',
  initialState,
  reducers: {
    setPage(state, action: PayloadAction<number>) {
      state.currentPage = action.payload;
    },
  },
});

export const { setPage } = paginationSlice.actions;
export default paginationSlice.reducer;
