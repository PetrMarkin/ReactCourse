import { render, screen } from '@testing-library/react';
import { describe, it, vi, beforeEach, Mock } from 'vitest';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import { BrowserRouter as Router } from 'react-router-dom';
import searchSlice from '../store/searchSlice';
import CardList from '../components/CardList/CardList';
import { apiSlice } from '../store/apiSlice';
import { Result } from '../interfaces/interfaces';
import { ThemeProvider } from '../helpers/Contexts/ThemeContext';
import { useState } from 'react';

vi.mock('../store/apiSlice', () => ({
  apiSlice: {
    endpoints: {
      getPeople: {
        useQuery: vi.fn(),
      },
    },
  },
}));

vi.mock('react-redux', async () => {
  const actual = await vi.importActual('react-redux');
  return {
    ...actual,
    useSelector: vi.fn(),
    useDispatch: vi.fn(),
  };
});

vi.mock('../UI/Loader/Loader', () => ({
  default: () => <div data-testid='loader-container'>Loading...</div>,
}));

const MockCardComponent = ({ item }: { item: Result }) => {
  const [selectedItems] = useState<Result[]>([]);
  const handleCheckboxChange = () => {
    // handle state changes properly
  };

  return (
    <div>
      <input
        type='checkbox'
        checked={selectedItems.includes(item)}
        onChange={handleCheckboxChange}
      />
      {item.name}
    </div>
  );
};

vi.mock('../Card/Card', () => ({
  default: MockCardComponent,
}));

const mockStore = (state = {}) =>
  configureStore({
    reducer: {
      search: searchSlice.reducer,
    },
    preloadedState: state,
  });

const renderWithProviders = (ui: React.ReactElement, initialState = {}) => {
  const store = mockStore(initialState);
  return render(
    <Provider store={store}>
      <ThemeProvider>
        <Router>{ui}</Router>
      </ThemeProvider>
    </Provider>,
  );
};

describe('CardList Component', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('renders Loader component when data is loading', () => {
    (
      apiSlice.endpoints.getPeople.useQuery as unknown as Mock
    ).mockImplementation(() => ({
      data: null,
      isLoading: true,
      isFetching: false,
      error: null,
    }));

    renderWithProviders(<CardList />);

    expect(screen.getByTestId('loader-container')).toBeInTheDocument();
  });

  it('renders error message when there is an error fetching data', () => {
    (
      apiSlice.endpoints.getPeople.useQuery as unknown as Mock
    ).mockImplementation(() => ({
      data: null,
      isLoading: false,
      isFetching: false,
      error: new Error('Fetch error'),
    }));

    renderWithProviders(<CardList />);

    expect(screen.getByText('Error loading data')).toBeInTheDocument();
  });
});
