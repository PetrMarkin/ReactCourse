import { describe, it, expect, vi, beforeEach, Mock } from 'vitest';
import { render, screen, waitFor } from '@testing-library/react';
import DetailedCard from '../components/DetailedCard/DetailedCard';
import {
  BrowserRouter,
  useLoaderData,
  useNavigate,
  useParams,
} from 'react-router-dom';
import { mockResults } from './mock';
import { Provider } from 'react-redux';
import { ThemeProvider } from '../helpers/Contexts/ThemeContext';
import { configureStore } from '@reduxjs/toolkit';
import { apiSlice } from '../store/apiSlice';

vi.mock('react-router-dom', () => ({
  BrowserRouter: ({ children }: { children: React.ReactNode }) => (
    <>{children}</>
  ),
  useNavigate: vi.fn(),
  useLoaderData: vi.fn(),
  useParams: vi.fn(),
}));

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
      <ThemeProvider>
        <BrowserRouter>{ui}</BrowserRouter>
      </ThemeProvider>
    </Provider>,
  );
};

describe('DetailedCard component', () => {
  const mockItem = mockResults[0];

  beforeEach(() => {
    (useNavigate as unknown as Mock).mockReturnValue(vi.fn());
    (useLoaderData as unknown as Mock).mockReturnValue(mockItem);
    (useParams as unknown as Mock).mockReturnValue({ id: '1' });

    vi.doMock('../hooks/useOutsideClick', () => ({
      default: () => ({
        ref: { current: null },
        isActive: true,
        setIsActive: vi.fn(),
      }),
    }));
  });

  it('renders detailed card with correct data', async () => {
    renderWithProviders(<DetailedCard />);

    await waitFor(() => {
      expect(screen.queryByTestId('loader')).toBeNull();
      expect(screen.getByText(mockItem.name)).toBeInTheDocument();
    });
  });
});
