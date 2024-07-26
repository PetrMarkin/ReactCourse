import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import Loader from '../components/UI/Loader/Loader';
import { ThemeProvider } from '../helpers/Contexts/ThemeContext';
import { BrowserRouter } from 'react-router-dom';

const renderWithProviders = (ui: React.ReactElement) => {
  return render(
    <ThemeProvider>
      <BrowserRouter>{ui}</BrowserRouter>
    </ThemeProvider>,
  );
};

describe('Loader component', () => {
  it('renders loader container', () => {
    renderWithProviders(<Loader />);

    const loaderContainer = screen.getByTestId('loader-container');
    expect(loaderContainer).toBeInTheDocument();
  });

  it('renders loader element', () => {
    renderWithProviders(<Loader />);

    const loaderElement = screen.getByTestId('loader');
    expect(loaderElement).toBeInTheDocument();
  });
});
