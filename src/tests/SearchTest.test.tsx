import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { describe, it, expect, beforeEach } from 'vitest';
import SearchSection from '../components/SearchSection';
import { localStorageMock } from './mock';
import { useSearchQuery } from '../hooks/useSearchQuery';

Object.defineProperty(window, 'localStorage', {
  value: localStorageMock,
});

describe('SearchSection component', () => {
  beforeEach(() => {
    window.localStorage.clear();
  });

  it('saves input value to localStorage on search button click', async () => {
    const searchTerm = 'test';

    const ComponentWrapper = () => {
      const [searchQuery, setSearchQuery] = useSearchQuery('searchQuery', '');
      const handleInputChange = (
        event: React.ChangeEvent<HTMLInputElement>,
      ) => {
        setSearchQuery(event.target.value);
      };

      return (
        <SearchSection
          searchTerm={searchQuery}
          onSearch={() => {}}
          onChange={handleInputChange}
          onThrowError={() => {}}
        />
      );
    };

    render(<ComponentWrapper />);

    const searchInput = screen.getByPlaceholderText('Search your character');
    fireEvent.change(searchInput, { target: { value: searchTerm } });

    const searchButton = screen.getByText('Search');
    fireEvent.click(searchButton);

    await waitFor(() => {
      expect(window.localStorage.getItem('searchQuery')).toBe(searchTerm);
    });
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
