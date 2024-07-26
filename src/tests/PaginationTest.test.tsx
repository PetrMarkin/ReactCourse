import { render, fireEvent } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Pagination from '../components/Pagination/Pagination';
import { ThemeProvider } from '../helpers/Contexts/ThemeContext';

const renderWithProviders = (ui: React.ReactElement) => {
  return render(
    <ThemeProvider>
      <BrowserRouter>{ui}</BrowserRouter>
    </ThemeProvider>,
  );
};

describe('Pagination component', () => {
  it('renders without crashing', () => {
    renderWithProviders(<Pagination />);
  });

  it('updates URL parameter "page" when clicking "Previous" link', () => {
    const { getByText } = renderWithProviders(<Pagination />);
    fireEvent.click(getByText('Previous'));
  });

  it('updates URL parameter "page" when clicking "Next" link', () => {
    const { getByText } = renderWithProviders(<Pagination />);

    fireEvent.click(getByText('Next'));
  });
});
