import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import Card from '../components/Card/Card';
import selectedItemsSlice from '../store/selectedItemsSlice';
import { ThemeProvider } from '../helpers/Contexts/ThemeContext';
import { mockResults } from './mock';

const mockItem = mockResults[0];

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

describe('Card component', () => {
  it('displays the correct card data', () => {
    renderWithProviders(<Card item={mockItem} />);

    expect(screen.getByText(/Luke Skywalker/i)).toBeInTheDocument();
  });

  it('opens detailed card component on click', () => {
    renderWithProviders(<Card item={mockItem} />);

    fireEvent.click(screen.getByTestId('result-item'));
  });
});
