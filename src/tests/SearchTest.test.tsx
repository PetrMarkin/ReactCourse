import { render, screen } from '@testing-library/react';
import { describe, it, expect, beforeEach } from 'vitest';
import { localStorageMock } from './mock';
import { useSearchQuery } from '../hooks/useSearchQuery';

Object.defineProperty(window, 'localStorage', {
  value: localStorageMock,
});

describe('SearchSection component', () => {
  beforeEach(() => {
    window.localStorage.clear();
  });

  it('retrieves value from localStorage on mount', () => {
    const savedQuery = 'savedQuery';
    window.localStorage.setItem('searchQuery', savedQuery);

    const Component = () => {
      const [searchQuery] = useSearchQuery('searchQuery', '');
      return <div>{searchQuery}</div>;
    };

    render(<Component />);

    expect(screen.getByText(savedQuery)).toBeInTheDocument();
  });
});
