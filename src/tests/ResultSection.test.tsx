import { describe, it, expect, beforeEach, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import ResultsSection from '../components/ResultsSection/ResultsSection';
import { Provider } from 'react-redux';
import { ThemeProvider } from '../helpers/Contexts/ThemeContext';
import { configureStore } from '@reduxjs/toolkit';
import selectedItemsSlice from '../store/selectedItemsSlice';
import searchSlice from '../store/searchSlice';
import { apiSlice } from '../store/apiSlice';
import paginationSlice from '../store/paginationSlice';

const mockStore = () =>
  configureStore({
    reducer: {
      [apiSlice.reducerPath]: apiSlice.reducer,
      search: searchSlice.reducer,
      selectedItems: selectedItemsSlice,
      pagination: paginationSlice,
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(apiSlice.middleware),
  });

const renderWithProviders = (ui: React.ReactElement) => {
  const store = mockStore();
  return render(
    <Provider store={store}>
      <ThemeProvider>{ui}</ThemeProvider>
    </Provider>,
  );
};

describe('ResultsSection component', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('renders only CardList when there are no selected items', () => {
    renderWithProviders(<ResultsSection />);

    expect(screen.getByTestId('card-list')).toBeInTheDocument();
    expect(screen.queryByTestId('selected-items')).toBeNull();
  });
});
