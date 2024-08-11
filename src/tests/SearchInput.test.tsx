import { render, screen, fireEvent } from '@testing-library/react';
import { Mock, vi } from 'vitest';
import SearchInput from '../components/UI/SearchInput/SearchInput';
import { useTheme } from '../helpers/Contexts/ThemeConstants';

vi.mock('../helpers/Contexts/ThemeConstants', () => ({
  useTheme: vi.fn(),
}));

describe('SearchInput component', () => {
  beforeEach(() => {
    (useTheme as Mock).mockReturnValue({ theme: 'light' });
  });

  it('should render with the correct placeholder and value', () => {
    render(<SearchInput searchTerm='Luke' onChange={() => {}} />);

    const input = screen.getByPlaceholderText('Search your character');
    expect(input).toBeInTheDocument();
    expect(input).toHaveValue('Luke');
  });

  it('should call onChange handler when input value changes', () => {
    const handleChange = vi.fn();
    render(<SearchInput searchTerm='Luke' onChange={handleChange} />);

    const input = screen.getByPlaceholderText('Search your character');
    fireEvent.change(input, { target: { value: 'Leia' } });

    expect(handleChange).toHaveBeenCalledTimes(1);
    expect(handleChange).toHaveBeenCalledWith(expect.any(Object)); // Проверка события
  });
});
