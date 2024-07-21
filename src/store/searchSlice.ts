import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { SearchState, Result } from '../interfaces/interfaces';

const initialState: SearchState = {
  searchTerm: '',
  throwError: false,
  searchResults: [],
};

export const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    setSearchTerm(state, action: PayloadAction<string>) {
      state.searchTerm = action.payload;
    },
    toggleThrowError(state) {
      state.throwError = !state.throwError;
    },
    setSearchResults(state, action: PayloadAction<Result[]>) {
      state.searchResults = action.payload;
    },
    resetSearch(state) {
      state.searchTerm = '';
      state.throwError = false;
      state.searchResults = [];
    },
  },
});

export const {
  setSearchTerm,
  toggleThrowError,
  setSearchResults,
  resetSearch,
} = searchSlice.actions;
export default searchSlice;
