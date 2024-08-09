import { render, screen } from '@testing-library/react';
import { describe, it, vi } from 'vitest';
import { ThemeProvider } from '../helpers/Contexts/ThemeContext';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import selectedItemsSlice from '../store/selectedItemsSlice';
import Layout from '../components/Layout/Layout';
import { mockResults } from './mock';

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

vi.mock('next/router', () => ({
  useRouter: () => mockRouter,
}));

vi.mock('../components/SearchSection/SearchSection', () => ({
  default: () => <div>SearchSection</div>,
}));

vi.mock('../components/Pagination/Pagination', () => ({
  default: () => <div>Pagination</div>,
}));

vi.mock('../components/Card/Card', () => ({
  default: () => <div>Card</div>,
}));

const mockStore = (state = {}) =>
  configureStore({
    reducer: {
      selectedItems: selectedItemsSlice,
    },
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

describe('App Component', () => {
  const renderApp = (initialState = {}) => {
    return renderWithProviders(
      <Layout
        initialData={{
          results: mockResults,
        }}
        isLoading={false}
      >
        <></>
      </Layout>,
      initialState,
    );
  };

  it('renders SearchSection component', () => {
    renderApp();
    expect(screen.getByText('SearchSection')).toBeInTheDocument();
  });

  it('renders Pagination component', () => {
    renderApp();
    expect(screen.getByText('Pagination')).toBeInTheDocument();
  });

  it('does not throw error on initial render', () => {
    expect(() => renderApp()).not.toThrow();
  });
});
