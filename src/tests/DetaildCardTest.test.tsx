import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen, waitFor } from '@testing-library/react';
import DetailedCard from '../components/DetailedCard/DetailedCard';
import { Provider } from 'react-redux';
import { ThemeProvider } from '../helpers/Contexts/ThemeContext';
import { configureStore } from '@reduxjs/toolkit';
import { apiSlice } from '../store/apiSlice';
import { mockResults } from './mock';
import mockRouter from 'next-router-mock';

const mockItem = mockResults[0];
const initialError = null;
const onClose = vi.fn();

vi.mock('next/router', () => ({
  useRouter: () => mockRouter,
}));

vi.mock('../hooks/useOutsideClick', () => ({
  __esModule: true,
  default: () => ({
    ref: { current: null },
    isActive: true,
    setIsActive: vi.fn(),
  }),
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
      <ThemeProvider>{ui}</ThemeProvider>
    </Provider>,
  );
};

describe('DetailedCard component', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('renders detailed card with correct data', async () => {
    renderWithProviders(
      <DetailedCard
        initialData={mockItem}
        initialError={initialError}
        onClose={onClose}
      />,
    );

    await waitFor(() => {
      expect(screen.queryByTestId('loader')).toBeNull();
      expect(screen.getByText(mockItem.name)).toBeInTheDocument();
      expect(
        screen.getByText(`Height: ${mockItem.height}`),
      ).toBeInTheDocument();
      expect(screen.getByText(`Mass: ${mockItem.mass}`)).toBeInTheDocument();
      expect(
        screen.getByText(`Hair Color: ${mockItem.hair_color}`),
      ).toBeInTheDocument();
      expect(
        screen.getByText(`Skin Color: ${mockItem.skin_color}`),
      ).toBeInTheDocument();
      expect(
        screen.getByText(`Eye Color: ${mockItem.eye_color}`),
      ).toBeInTheDocument();
      expect(
        screen.getByText(`Birth Year: ${mockItem.birth_year}`),
      ).toBeInTheDocument();
      expect(
        screen.getByText(`Gender: ${mockItem.gender}`),
      ).toBeInTheDocument();
    });
  });
});
