import React, { useContext } from 'react';
import { ThemeContext } from '../../../helpers/Contexts/ThemeConstants';
import styles from './ThemeSwitcher.module.css';

const ThemeSwitcher: React.FC = () => {
  const themeContext = useContext(ThemeContext);

  if (!themeContext) {
    throw new Error('ThemeSwitcher must be used within a ThemeProvider');
  }

  const { theme, toggleTheme } = themeContext;

  return (
    <button
      onClick={toggleTheme}
      className={`${styles.btnTheme} ${styles[theme]}`}
    >
      Switch to {theme === 'light' ? 'dark' : 'light'} theme
    </button>
  );
};

export default ThemeSwitcher;
