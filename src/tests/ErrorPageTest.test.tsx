import { describe, it, expect, vi, Mock } from 'vitest';
import { render, screen } from '@testing-library/react';
import { useRouteError } from 'react-router-dom';
import ErrorPage from '../components/ErrorPage';

vi.mock('react-router-dom', () => ({
  useRouteError: vi.fn(),
}));

describe('ErrorPage component', () => {
  it('renders error message', () => {
    (useRouteError as Mock).mockReturnValue(new Error('Test error'));

    render(<ErrorPage />);

    expect(screen.getByText(/Oops!/i)).toBeInTheDocument();
    expect(
      screen.getByText(/Sorry, an unexpected error has occurred./i),
    ).toBeInTheDocument();
    expect(screen.getByText(/Error 404/i)).toBeInTheDocument();
    expect(screen.getByText(/May the Force be with you/i)).toBeInTheDocument();
  });
});
