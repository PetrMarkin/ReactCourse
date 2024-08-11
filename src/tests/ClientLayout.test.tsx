import { render, screen, waitFor, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import ClientLayout from '../components/ClientLayout/ClientLayout';
import { SelectedItemsProvider } from '../helpers/Contexts/SelectedItemsContext';
import { mockResults } from './mock';
import { fetchPeopleData, fetchSearchResults } from '../helpers/api';
import { ThemeProvider } from '../helpers/Contexts/ThemeContext';

vi.mock('../helpers/api', () => ({
  fetchPeopleData: vi.fn(),
  fetchSearchResults: vi.fn(),
}));

vi.mock('next/navigation', () => ({
  useRouter: () => ({
    push: vi.fn(),
    query: { page: '1' },
  }),
  useSearchParams: () => new URLSearchParams(),
}));

const renderWithProviders = (ui: React.ReactElement) => {
  return render(
    <SelectedItemsProvider>
      <ThemeProvider>{ui}</ThemeProvider>
    </SelectedItemsProvider>,
  );
};

const mockFetchPeopleData = vi.fn().mockResolvedValue({ results: mockResults });
const mockFetchSearchResults = vi
  .fn()
  .mockResolvedValue({ results: mockResults });

vi.mocked(fetchPeopleData).mockImplementation(mockFetchPeopleData);
vi.mocked(fetchSearchResults).mockImplementation(mockFetchSearchResults);

describe('ClientLayout component', () => {
  it('renders search section and pagination', async () => {
    renderWithProviders(<ClientLayout searchParams={{}} />);

    await waitFor(() => expect(screen.getByText('Search')).toBeInTheDocument());

    expect(screen.getByText('Next')).toBeInTheDocument();
  });

  it('handles search input change and search button click', async () => {
    renderWithProviders(<ClientLayout searchParams={{}} />);

    const searchInput = await screen.findByPlaceholderText(
      'Search your character',
    );
    const searchButton = screen.getByText('Search');

    fireEvent.change(searchInput, { target: { value: 'Luke' } });

    fireEvent.click(searchButton);

    await waitFor(() =>
      expect(mockFetchSearchResults).toHaveBeenCalledWith('Luke'),
    );
  });
});
