import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Pagination from '../components/Pagination/Pagination';
import { ThemeProvider } from '../helpers/Contexts/ThemeContext';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import paginationSlice from '../store/paginationSlice';

const mockStore = () =>
  configureStore({
    reducer: {
      pagination: paginationSlice,
    },
  });

const renderWithProviders = (ui: React.ReactElement) => {
  const store = mockStore();
  return render(
    <Provider store={store}>
      <ThemeProvider>
        <MemoryRouter>{ui}</MemoryRouter>{' '}
      </ThemeProvider>
    </Provider>,
  );
};

describe('Pagination component', () => {
  it('renders without crashing', () => {
    renderWithProviders(<Pagination />);
  });

  it('renders the correct number of page links', () => {
    const { getAllByText } = renderWithProviders(<Pagination />);

    const pageLinks = getAllByText((content, element) => {
      return (
        element?.tagName.toLowerCase() === 'span' && !isNaN(Number(content))
      );
    });

    expect(pageLinks).toHaveLength(9);
  });
});
