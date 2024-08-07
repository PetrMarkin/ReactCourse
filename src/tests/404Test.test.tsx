import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import Custom404 from '../../pages/404';

vi.mock('../src/components/ErrorPage/ErrorPage', () => ({
  __esModule: true,
  default: () => <div data-testid='error-page'>Error Page</div>,
}));

describe('Custom404 page', () => {
  it('renders ErrorPage component', () => {
    render(<Custom404 />);
    expect(screen.getByTestId('error-page')).toBeInTheDocument();
  });
});
