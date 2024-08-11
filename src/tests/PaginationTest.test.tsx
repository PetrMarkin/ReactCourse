import { render } from '@testing-library/react';
import Pagination from '../components/Pagination/Pagination';
import { ThemeProvider } from '../helpers/Contexts/ThemeContext';
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

describe('Pagination component', () => {
  it('renders without crashing', () => {
    renderWithProviders(<Pagination totalPages={9} />);
  });

  it('renders the correct number of page links', () => {
    const { getAllByText } = renderWithProviders(<Pagination totalPages={9} />);

    const pageLinks = getAllByText((content, element) => {
      return (
        element?.tagName.toLowerCase() === 'span' && !isNaN(Number(content))
      );
    });

    expect(pageLinks).toHaveLength(9);
  });
});
