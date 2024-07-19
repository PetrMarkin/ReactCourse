import React from 'react';
import styles from './Button.module.css';
import { useTheme } from '../../../helpers/Contexts/ThemeConstants';

interface ButtonProps {
  onClick: () => void;
  children: React.ReactNode;
}

function Button({ onClick, children }: ButtonProps) {
  const { theme } = useTheme();

  return (
    <button className={`${styles.button} ${styles[theme]}`} onClick={onClick}>
      {children}
    </button>
  );
}

export default Button;
