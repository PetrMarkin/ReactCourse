import { render, screen, fireEvent } from '@testing-library/react';
import { vi } from 'vitest';
import ThemeSwitcher from '../components/UI/ThemeSwitcher/ThemeSwitcher';
import { ThemeContext } from '../helpers/Contexts/ThemeConstants';

describe('ThemeSwitcher component', () => {
  const mockToggleTheme = vi.fn();

  const renderWithContext = (value: {
    theme: string;
    toggleTheme: () => void;
  }) => {
    render(
      <ThemeContext.Provider value={value}>
        <ThemeSwitcher />
      </ThemeContext.Provider>,
    );
  };

  it('should render button with text "Switch to dark theme" when theme is light', () => {
    renderWithContext({ theme: 'light', toggleTheme: mockToggleTheme });

    expect(screen.getByRole('button')).toHaveTextContent(
      'Switch to dark theme',
    );
  });

  it('should render button with text "Switch to light theme" when theme is dark', () => {
    renderWithContext({ theme: 'dark', toggleTheme: mockToggleTheme });

    expect(screen.getByRole('button')).toHaveTextContent(
      'Switch to light theme',
    );
  });

  it('should call toggleTheme when button is clicked', () => {
    renderWithContext({ theme: 'light', toggleTheme: mockToggleTheme });

    fireEvent.click(screen.getByRole('button'));

    expect(mockToggleTheme).toHaveBeenCalled();
  });
});
