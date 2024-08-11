import { render, screen } from '@testing-library/react';
import ErrorBoundary from '../components/common/ErrorBoundary';
import { Mock } from 'vitest';

describe('ErrorBoundary', () => {
  const ChildComponent = () => <div>Child Component</div>;

  it('renders children when there is no error', () => {
    render(
      <ErrorBoundary>
        <ChildComponent />
      </ErrorBoundary>,
    );

    expect(screen.getByText('Child Component')).toBeInTheDocument();
  });

  it('renders error message when an error is thrown', () => {
    const ErrorThrowingComponent = () => {
      throw new Error('Test error');
    };

    vi.spyOn(console, 'error').mockImplementation(() => {});

    render(
      <ErrorBoundary>
        <ErrorThrowingComponent />
      </ErrorBoundary>,
    );

    expect(screen.getByText('Something went wrong.')).toBeInTheDocument();

    (console.error as Mock).mockRestore();
  });

  it('calls componentDidCatch when an error is thrown', () => {
    const spy = vi.spyOn(ErrorBoundary.prototype, 'componentDidCatch');
    const ErrorThrowingComponent = () => {
      throw new Error('Test error');
    };

    vi.spyOn(console, 'error').mockImplementation(() => {});

    render(
      <ErrorBoundary>
        <ErrorThrowingComponent />
      </ErrorBoundary>,
    );

    expect(spy).toHaveBeenCalled();
    expect(spy).toHaveBeenCalledWith(expect.any(Error), expect.any(Object));

    spy.mockRestore();
    (console.error as Mock).mockRestore();
  });
});
