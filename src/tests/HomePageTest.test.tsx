import { describe, it, expect, vi } from 'vitest';
import { render, screen, act } from '@testing-library/react';
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
  query: { page: '1', details: '1' },
  pathname: '/',
  asPath: '/',
  replace: vi.fn(),
  reload: vi.fn(),
  route: '/',
  basePath: '/',
  isLocaleDomain: false,
};

const mockData = mockResults;
const mockResponseData = {
  count: 82,
  next: 'https://swapi.dev/api/people/?page=2',
  previous: null,
  results: mockData,
};

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
      <HomePage isLoading={false} initialData={mockResponseData} />,
    );
    const allLukeSkywalkerElements = screen.getAllByText('Luke Skywalker');
    expect(allLukeSkywalkerElements.length).toBe(2);
  });

  it('hides DetailedCard and navigates back when handleClose is called', () => {
    renderWithProviders(
      <HomePage initialData={mockResponseData} isLoading={false} />,
    );

    const closeButton = screen.getByText('Close');
    act(() => {
      closeButton.click();
    });

    expect(mockRouter.push).toHaveBeenCalledWith('/', undefined, {
      shallow: true,
    });
  });
});
