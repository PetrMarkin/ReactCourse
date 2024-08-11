import { render, screen, fireEvent } from '@testing-library/react';
import { vi } from 'vitest';
import SearchSection from '../components/SearchSection/SearchSection';
import { ButtonProps } from '../interfaces/interfaces';

vi.mock('../components/UI/SearchInput/SearchInput', () => ({
  __esModule: true,
  default: vi.fn(() => <input data-testid='search-input' />),
}));

vi.mock('../components/UI/Button/Button', () => ({
  __esModule: true,
  default: vi.fn(({ onClick }: ButtonProps) => (
    <button data-testid='search-button' onClick={onClick}>
      Search
    </button>
  )),
}));

vi.mock('../components/UI/ThemeSwitcher/ThemeSwitcher', () => ({
  __esModule: true,
  default: vi.fn(() => <div data-testid='theme-switcher' />),
}));

describe('SearchSection component', () => {
  it('should render SearchInput, Button, and ThemeSwitcher components', () => {
    render(
      <SearchSection
        searchTerm='Luke'
        onSearch={() => {}}
        onChange={() => {}}
      />,
    );

    expect(screen.getByTestId('search-input')).toBeInTheDocument();
    expect(screen.getByTestId('search-button')).toBeInTheDocument();
    expect(screen.getByTestId('theme-switcher')).toBeInTheDocument();
  });

  it('should call onSearch handler when Button is clicked', () => {
    const handleSearch = vi.fn();
    render(
      <SearchSection
        searchTerm='Luke'
        onSearch={handleSearch}
        onChange={() => {}}
      />,
    );

    const searchButton = screen.getByTestId('search-button');
    fireEvent.click(searchButton);

    expect(handleSearch).toHaveBeenCalledTimes(1);
  });
});
