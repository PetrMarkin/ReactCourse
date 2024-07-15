import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import Loader from '../components/UI/Loader';

describe('Loader component', () => {
  it('renders loader container', () => {
    render(<Loader />);

    const loaderContainer = screen.getByTestId('loader-container');
    expect(loaderContainer).toBeInTheDocument();
  });

  it('renders loader element', () => {
    render(<Loader />);

    const loaderElement = screen.getByTestId('loader');
    expect(loaderElement).toBeInTheDocument();
  });

  it('loader element has correct class', () => {
    render(<Loader />);

    const loaderElement = screen.getByTestId('loader');
    expect(loaderElement).toHaveClass('loader');
  });
});
