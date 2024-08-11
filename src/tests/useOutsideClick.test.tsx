import { render, screen, fireEvent } from '@testing-library/react';
import React from 'react';
import { vi } from 'vitest';
import useOutsideClick from '../hooks/useOutsideClick';

const TestComponent: React.FC<{ initialValue: boolean }> = ({
  initialValue,
}) => {
  const { ref, isActive, setIsActive } = useOutsideClick(initialValue);

  return (
    <div>
      <div ref={ref} data-testid='inside-element'>
        Inside
      </div>
      <button data-testid='toggle' onClick={() => setIsActive(!isActive)}>
        Toggle
      </button>
      <div data-testid='status'>Status: {isActive ? 'Active' : 'Inactive'}</div>
    </div>
  );
};

vi.mock('next/navigation', () => ({
  useRouter: () => ({
    push: vi.fn(),
  }),
  useSearchParams: () => ({
    toString: vi.fn(() => ''),
  }),
}));

describe('useOutsideClick hook', () => {
  beforeEach(() => {
    vi.spyOn(document, 'addEventListener').mockImplementation(() => {});
    vi.spyOn(document, 'removeEventListener').mockImplementation(() => {});
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  it('should not change isActive or update URL when clicking inside', () => {
    render(<TestComponent initialValue={true} />);

    expect(screen.getByTestId('status')).toHaveTextContent('Status: Active');

    fireEvent.click(screen.getByTestId('inside-element'));

    expect(screen.getByTestId('status')).toHaveTextContent('Status: Active');
  });
});
