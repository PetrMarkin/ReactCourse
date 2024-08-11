import { render, screen } from '@testing-library/react';
import NotFoundPage from '../../app/not-found';

vi.mock('../src/components/ErrorPage/ErrorPage', () => ({
  __esModule: true,
  default: () => <div data-testid='error-page'>Error Page</div>,
}));

describe('NotFoundPage component', () => {
  it('should render the ErrorPage component', () => {
    render(<NotFoundPage />);

    expect(screen.getByTestId('error-page')).toBeInTheDocument();
  });
});
