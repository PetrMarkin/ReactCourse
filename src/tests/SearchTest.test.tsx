import { render, screen, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import { describe, it, expect, beforeEach } from 'vitest';
import { localStorageMock } from './mock';
import SearchSection from '../components/SearchSection/SearchSection';
import { setSearchTerm, toggleThrowError } from '../store/searchSlice';
import { ThemeProvider } from '../helpers/Contexts/ThemeContext';
import { BrowserRouter } from 'react-router-dom';

Object.defineProperty(window, 'localStorage', {
  value: localStorageMock,
});

const renderWithProviders = (ui: React.ReactElement) => {
  return render(
    <ThemeProvider>
      <BrowserRouter>{ui}</BrowserRouter>
    </ThemeProvider>,
  );
};

const mockStore = configureMockStore();

describe('SearchSection component', () => {
  let store: ReturnType<typeof mockStore>;

  beforeEach(() => {
    store = mockStore({
      search: { searchTerm: '', searchResults: [] },
    });
    window.localStorage.clear();
  });

  it('renders without crashing', () => {
    renderWithProviders(
      <Provider store={store}>
        <SearchSection />
      </Provider>,
    );
  });

  it('retrieves value from localStorage on mount', () => {
    const savedQuery = 'savedQuery';
    window.localStorage.setItem('searchQuery', JSON.stringify(savedQuery));

    renderWithProviders(
      <Provider store={store}>
        <SearchSection />
      </Provider>,
    );

    const actions = store.getActions();
    expect(actions).toContainEqual(setSearchTerm(savedQuery));
  });

  it('dispatches setSearchTerm on input change', () => {
    renderWithProviders(
      <Provider store={store}>
        <SearchSection />
      </Provider>,
    );

    const input = screen.getByPlaceholderText('Search your character');
    fireEvent.change(input, { target: { value: 'Luke' } });

    const actions = store.getActions();
    expect(actions).toContainEqual(setSearchTerm('Luke'));
  });

  it('dispatches toggleThrowError on throw error button click', () => {
    renderWithProviders(
      <Provider store={store}>
        <SearchSection />
      </Provider>,
    );

    const button = screen.getByText('Throw Error');
    fireEvent.click(button);

    const actions = store.getActions();
    expect(actions).toContainEqual(toggleThrowError());
  });
});
