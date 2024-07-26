import { render, screen } from '@testing-library/react';
import { describe, it, vi } from 'vitest';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from '../helpers/Contexts/ThemeContext';
import App from '../App';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import selectedItemsSlice from '../store/selectedItemsSlice';

vi.mock('../components/SearchSection/SearchSection', () => ({
  default: () => <div>SearchSection</div>,
}));

vi.mock('../components/ResultsSection/ResultsSection', () => ({
  default: () => <div>ResultsSection</div>,
}));

vi.mock('../components/Pagination/Pagination', () => ({
  default: () => <div>Pagination</div>,
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
      <ThemeProvider>
        <BrowserRouter>{ui}</BrowserRouter>
      </ThemeProvider>
    </Provider>,
  );
};

describe('App Component', () => {
  const renderApp = (initialState = {}) => {
    return renderWithProviders(<App />, initialState);
  };

  it('renders SearchSection component', () => {
    renderApp();
    expect(screen.getByText('SearchSection')).toBeInTheDocument();
  });

  it('renders ResultsSection component', () => {
    renderApp();
    expect(screen.getByText('ResultsSection')).toBeInTheDocument();
  });

  it('renders Pagination component', () => {
    renderApp();
    expect(screen.getByText('Pagination')).toBeInTheDocument();
  });

  it('does not throw error on initial render', () => {
    expect(() => renderApp()).not.toThrow();
  });
});
