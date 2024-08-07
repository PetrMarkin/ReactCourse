import { render, screen } from '@testing-library/react';
import { afterAll, afterEach, describe, expect, it, vi } from 'vitest';
import Card from '../components/Card/Card';
import { mockResults } from './mock';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import { ThemeProvider } from '../helpers/Contexts/ThemeContext';
import { apiSlice } from '../store/apiSlice';
import selectedItemsReducer from '../store/selectedItemsSlice';

vi.mock('next/router', () => ({
  useRouter: () => ({
    push: vi.fn(),
    query: { page: '1' },
  }),
}));

const mockItem = mockResults[0];

const mockStore = (state = {}) =>
  configureStore({
    reducer: {
      [apiSlice.reducerPath]: apiSlice.reducer,
      selectedItems: selectedItemsReducer,
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

describe('Card component', () => {
  afterEach(() => {
    vi.clearAllMocks();
  });

  afterAll(() => {
    vi.restoreAllMocks();
  });

  it('Card is rendered with the correct value', () => {
    renderWithProviders(<Card item={mockItem} />);

    screen.debug();

    expect(
      screen.getByText(new RegExp(mockItem.name, 'i')),
    ).toBeInTheDocument();
  });
});
