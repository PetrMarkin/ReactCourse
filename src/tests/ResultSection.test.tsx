import { describe, it, expect, beforeEach, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import ResultsSection from '../components/ResultsSection/ResultsSection';
import { Provider } from 'react-redux';
import { ThemeProvider } from '../helpers/Contexts/ThemeContext';
import { BrowserRouter } from 'react-router-dom';
import { configureStore } from '@reduxjs/toolkit';
import selectedItemsSlice from '../store/selectedItemsSlice';
import searchSlice from '../store/searchSlice';
import { apiSlice } from '../store/apiSlice'; // Импортируйте apiSlice
import { RootState } from '../interfaces/interfaces';
import { mockResults } from './mock';

const mockState: RootState = {
  selectedItems: {
    selectedItems: mockResults,
  },
  search: {
    searchTerm: '',
    throwError: false,
    searchResults: mockResults,
  },
};

const mockStore = (preloadedState: RootState) =>
  configureStore({
    reducer: {
      selectedItems: selectedItemsSlice,
      search: searchSlice.reducer,
      [apiSlice.reducerPath]: apiSlice.reducer,
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(apiSlice.middleware),
    preloadedState,
  });

const renderWithProviders = (
  ui: React.ReactElement,
  initialState: RootState,
) => {
  const store = mockStore(initialState);
  return render(
    <Provider store={store}>
      <ThemeProvider>
        <BrowserRouter>{ui}</BrowserRouter>
      </ThemeProvider>
    </Provider>,
  );
};

describe('ResultsSection component', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('renders CardList and SelectedItems when there are selected items', () => {
    renderWithProviders(<ResultsSection />, mockState);

    expect(screen.getByTestId('card-list')).toBeInTheDocument();
    expect(screen.getByTestId('selected-items')).toBeInTheDocument();
  });

  it('renders only CardList when there are no selected items', () => {
    const emptyState: RootState = {
      selectedItems: {
        selectedItems: [],
      },
      search: {
        searchTerm: '',
        throwError: false,
        searchResults: mockResults,
      },
    };

    renderWithProviders(<ResultsSection />, emptyState);

    expect(screen.getByTestId('card-list')).toBeInTheDocument();
    expect(screen.queryByTestId('selected-items')).toBeNull();
  });
});
