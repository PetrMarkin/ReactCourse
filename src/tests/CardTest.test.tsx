import { render, screen } from '@testing-library/react';
import { afterAll, afterEach, describe, expect, it, vi } from 'vitest';
import Card from '../components/Card/Card';
import { mockResults } from './mock';
import { ThemeProvider } from '../helpers/Contexts/ThemeContext';
import { SelectedItemsProvider } from '../helpers/Contexts/SelectedItemsContext';

vi.mock('next/navigation', () => ({
  useRouter: () => ({
    push: vi.fn(),
    query: { page: '1' },
  }),
  useSearchParams: () => new URLSearchParams(),
}));

const mockItem = mockResults[0];

const renderWithProviders = (ui: React.ReactElement) => {
  return render(
    <SelectedItemsProvider>
      <ThemeProvider>{ui}</ThemeProvider>
    </SelectedItemsProvider>,
  );
};

describe('Card component', () => {
  afterEach(() => {
    vi.clearAllMocks();
  });

  afterAll(() => {
    vi.restoreAllMocks();
  });

  it('Card is rendered with the correct value', () => {
    renderWithProviders(<Card item={mockItem} />);

    expect(
      screen.getByText(new RegExp(mockItem.name, 'i')),
    ).toBeInTheDocument();
  });
});
