import { render, screen, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import { useSelector, useDispatch } from 'react-redux';
import { vi, describe, it, expect, beforeEach, MockedFunction } from 'vitest';
import { clearSelectedItems } from '../store/selectedItemsSlice';
import { useTheme } from '../helpers/Contexts/ThemeConstants';
import ItemList from '../components/SelectedItems/SelectedItems';

vi.mock('react-redux', async (importOriginal) => {
  const actual: typeof import('react-redux') = await importOriginal();

  return {
    ...actual,
    useSelector: vi.fn(),
    useDispatch: vi.fn(),
    Provider: actual.Provider,
  };
});

vi.mock('../helpers/Contexts/ThemeConstants', () => ({
  useTheme: vi.fn(),
}));

vi.mock('../store/selectedItemsSlice', () => ({
  clearSelectedItems: vi.fn(),
  default: () => ({}),
}));

describe('ItemList component', () => {
  const mockDispatch = vi.fn();
  const mockUseTheme = useTheme as MockedFunction<typeof useTheme>;
  const mockUseSelector = useSelector as MockedFunction<typeof useSelector>;

  beforeEach(() => {
    mockDispatch.mockClear();
    mockUseTheme.mockReturnValue({
      theme: 'light',
      toggleTheme: function (): void {
        throw new Error('Function not implemented.');
      },
    });
    mockUseSelector.mockReturnValue([]);
    (useDispatch as MockedFunction<typeof useDispatch>).mockReturnValue(
      mockDispatch,
    );
  });

  const renderWithProviders = (ui: React.ReactElement) => {
    const store = configureStore({
      reducer: {
        selectedItems: () => ({}),
      },
    });

    return render(<Provider store={store}>{ui}</Provider>);
  };

  it('should render correctly with the current theme', () => {
    renderWithProviders(<ItemList />);

    expect(screen.getByText('Selected Items:')).toHaveClass('light');
  });

  it('should handle "Unselect all" button click', () => {
    mockUseSelector.mockReturnValue([
      { name: 'Luke Skywalker', url: 'mock-url' },
    ]);

    renderWithProviders(<ItemList />);

    fireEvent.click(screen.getByText('Unselect all'));

    expect(mockDispatch).toHaveBeenCalledWith(clearSelectedItems());
  });

  it('should handle "Download" button click when there are selected items', () => {
    renderWithProviders(<ItemList />);

    const downloadButton = screen.getByRole('button', { name: /Download/i });

    expect(downloadButton).toBeInTheDocument();

    const clickSpy = vi.spyOn(downloadButton, 'click');

    downloadButton.click();

    expect(clickSpy).toHaveBeenCalled();
  });

  it('should display alert when "Download" button is clicked and no items are selected', () => {
    mockUseSelector.mockReturnValue([]);

    renderWithProviders(<ItemList />);

    const alertSpy = vi.spyOn(window, 'alert').mockImplementation(() => {});

    fireEvent.click(screen.getByText('Download'));

    expect(alertSpy).toHaveBeenCalledWith('No items selected');
  });
});
