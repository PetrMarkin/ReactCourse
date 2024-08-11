import { render, screen, fireEvent } from '@testing-library/react';
import { Mock, vi } from 'vitest';
import SelectedItems from '../components/SelectedItems/SelectedItems';
import { useSelectedItems } from '../helpers/Contexts/SelectedItemsContext';
import { useTheme } from '../helpers/Contexts/ThemeConstants';

vi.mock('../helpers/Contexts/SelectedItemsContext', () => ({
  useSelectedItems: vi.fn(),
}));

vi.mock('../helpers/Contexts/ThemeConstants', () => ({
  useTheme: vi.fn(),
}));

describe('SelectedItems component', () => {
  const mockDeselectItem = vi.fn();
  const mockSelectedItems = [
    {
      name: 'Luke Skywalker',
      height: '172',
      mass: '77',
      homeworld: 'Tatooine',
      films: ['A New Hope', 'The Empire Strikes Back'],
      species: ['Human'],
      created: '2014-12-09T13:50:51.644000Z',
      edited: '2014-12-20T21:17:56.891000Z',
      url: 'https://swapi.dev/api/people/1/',
    },
  ];

  beforeEach(() => {
    (useSelectedItems as Mock).mockReturnValue({
      selectedItems: mockSelectedItems,
      deselectItem: mockDeselectItem,
    });
    (useTheme as Mock).mockReturnValue({ theme: 'light' });
  });

  it('should render selected items and buttons correctly', () => {
    render(<SelectedItems />);

    expect(screen.getByText('Selected Items:')).toBeInTheDocument();
    expect(screen.getByText('Luke Skywalker')).toBeInTheDocument();
    expect(screen.getByText('Unselect all')).toBeInTheDocument();
    expect(screen.getByText('Download')).toBeInTheDocument();
  });

  it('should call deselectItem for each selected item when "Unselect all" is clicked', () => {
    render(<SelectedItems />);

    fireEvent.click(screen.getByText('Unselect all'));

    expect(mockDeselectItem).toHaveBeenCalledTimes(mockSelectedItems.length);
    expect(mockDeselectItem).toHaveBeenCalledWith(mockSelectedItems[0].url);
  });
});
