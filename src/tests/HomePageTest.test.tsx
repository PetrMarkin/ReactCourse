import { describe, it, expect, vi } from 'vitest';
import { render, screen, waitFor, act } from '@testing-library/react';
import '@testing-library/jest-dom';
import HomePage from '../../pages';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import { ThemeProvider } from '../helpers/Contexts/ThemeContext';
import { apiSlice } from '../store/apiSlice';
import { mockResults } from './mock';
import { RootState } from '../interfaces/interfaces';
import searchSlice from '../store/searchSlice';
import selectedItemsSlice from '../store/selectedItemsSlice';
import paginationSlice from '../store/paginationSlice';

const mockRouter = {
  push: vi.fn(),
  query: { details: '1' },
  pathname: '/',
  asPath: '/',
  replace: vi.fn(),
  reload: vi.fn(),
  route: '/',
  basePath: '/',
  isLocaleDomain: false,
};

const mockData = mockResults[0];

const mockStore = (state = {}) =>
  configureStore({
    reducer: {
      [apiSlice.reducerPath]: apiSlice.reducer,
      search: searchSlice.reducer,
      selectedItems: selectedItemsSlice,
      pagination: paginationSlice,
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(apiSlice.middleware),
    preloadedState: state,
  });

const renderWithProviders = (
  ui: React.ReactElement,
  initialState: Partial<RootState> = {},
) => {
  const store = mockStore(initialState);
  return render(
    <Provider store={store}>
      <ThemeProvider>{ui}</ThemeProvider>
    </Provider>,
  );
};

vi.mock('next/router', () => ({
  useRouter: () => mockRouter,
}));

describe('HomePage', () => {
  it('renders DetailedCard when ID is present in the query', () => {
    renderWithProviders(
      <HomePage initialData={mockData} initialError={null} />,
    );
    expect(screen.getByText('Luke Skywalker')).toBeInTheDocument();
  });

  it('hides DetailedCard and navigates back when handleClose is called', async () => {
    renderWithProviders(
      <HomePage initialData={mockData} initialError={null} />,
    );

    await screen.findByText('Luke Skywalker');

    const closeButton = screen.getByText('Close');
    act(() => {
      closeButton.click();
    });

    await waitFor(() => {
      expect(screen.queryByText('Luke Skywalker')).not.toBeInTheDocument();
    });

    expect(mockRouter.push).toHaveBeenCalledWith('/', undefined, {
      shallow: true,
    });
  });
});
