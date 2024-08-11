import { createContext, useContext } from 'react';
import { ThemeContextType } from '../../interfaces/interfaces';

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

export const ThemeContext = createContext<ThemeContextType | undefined>(
  undefined,
);
