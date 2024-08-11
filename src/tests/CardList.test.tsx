import { render, screen } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import CardList from '../components/CardList/CardList';
import { ThemeProvider } from '../helpers/Contexts/ThemeContext';
import { mockResults } from './mock';
import { SelectedItemsProvider } from '../helpers/Contexts/SelectedItemsContext';

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

describe('CardList component', () => {
  it('shows data when data is correct', () => {
    renderWithProviders(<CardList data={mockResults} />);
    expect(screen.getAllByText('Luke Skywalker')).toHaveLength(1);
  });

  it('shows "No results found" when initialData is empty', () => {
    renderWithProviders(<CardList data={[]} />);
    expect(screen.getAllByText('No results found')).toHaveLength(1);
  });

  it('does not render Card components when initialData contains no results', () => {
    renderWithProviders(<CardList data={[]} />);
    const cardElements = screen.queryAllByRole('article');
    expect(cardElements).toHaveLength(0);
  });
});
