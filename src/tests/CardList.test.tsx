import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import CardList from '../components/CardList/CardList';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import { ThemeProvider } from '../helpers/Contexts/ThemeContext';
import { apiSlice } from '../store/apiSlice';

const mockStore = (state = {}) =>
  configureStore({
    reducer: {
      [apiSlice.reducerPath]: apiSlice.reducer,
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(apiSlice.middleware),
    preloadedState: state,
  });

const renderWithProviders = (ui: React.ReactElement, initialState = {}) => {
  const store = mockStore(initialState);
  return render(
    <Provider store={store}>
      <ThemeProvider>{ui}</ThemeProvider>
    </Provider>,
  );
};

describe('CardList component', () => {
  it('shows Loader when isLoading is true', () => {
    renderWithProviders(<CardList initialData={null} isLoading={true} />);
    expect(screen.getByTestId('loader')).toBeInTheDocument();
  });

  it('shows "No results found" when initialData is null or empty', () => {
    renderWithProviders(<CardList initialData={null} isLoading={false} />);
    expect(screen.getAllByText('No results found')).toHaveLength(1);

    renderWithProviders(
      <CardList initialData={{ results: [] }} isLoading={false} />,
    );
    expect(screen.getAllByText('No results found')).toHaveLength(2);
  });

  it('does not render Card components when initialData contains no results', () => {
    renderWithProviders(
      <CardList initialData={{ results: [] }} isLoading={false} />,
    );
    const cardElements = screen.queryAllByRole('article');
    expect(cardElements).toHaveLength(0);
  });
});
