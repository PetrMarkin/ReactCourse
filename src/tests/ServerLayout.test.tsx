import { render, screen } from '@testing-library/react';
import Layout from '../components/Layout/Layout';
import { SelectedItemsProvider } from '../helpers/Contexts/SelectedItemsContext';
import { ThemeProvider } from '../helpers/Contexts/ThemeContext';

vi.mock('../components/ClientLayout/ClientLayout', () => ({
  __esModule: true,
  default: ({
    searchParams,
  }: {
    searchParams: { [key: string]: string | undefined };
  }) => (
    <div data-testid='client-layout'>
      {searchParams.page && <p data-testid='page'>{searchParams.page}</p>}
      {searchParams.searchTerm && (
        <p data-testid='searchTerm'>{searchParams.searchTerm}</p>
      )}
      {searchParams.details && (
        <p data-testid='details'>{searchParams.details}</p>
      )}
    </div>
  ),
}));

const renderWithProviders = (ui: React.ReactElement) => {
  return render(
    <SelectedItemsProvider>
      <ThemeProvider>{ui}</ThemeProvider>
    </SelectedItemsProvider>,
  );
};

describe('Layout component', () => {
  it('should render ClientLayout with correct searchParams', () => {
    const searchParams = {
      page: '1',
      searchTerm: 'Luke',
      details: 'true',
    };

    renderWithProviders(<Layout searchParams={searchParams} />);

    expect(screen.getByTestId('client-layout')).toBeInTheDocument();
    expect(screen.getByTestId('page')).toHaveTextContent('1');
    expect(screen.getByTestId('searchTerm')).toHaveTextContent('Luke');
    expect(screen.getByTestId('details')).toHaveTextContent('true');
  });

  it('should render ClientLayout with no searchParams if they are not provided', () => {
    renderWithProviders(<Layout searchParams={{}} />);

    expect(screen.getByTestId('client-layout')).toBeInTheDocument();
    expect(screen.queryByTestId('page')).toBeNull();
    expect(screen.queryByTestId('searchTerm')).toBeNull();
    expect(screen.queryByTestId('details')).toBeNull();
  });
});
