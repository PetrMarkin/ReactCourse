import { ReactNode, useEffect, useState } from 'react';
import styles from './Layout.module.css';
import { useTheme } from '../../helpers/Contexts/ThemeConstants';
import SearchSection from '../SearchSection/SearchSection';
import Pagination from '../Pagination/Pagination';
import ResultsSection from '../ResultsSection/ResultsSection';

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const [throwError] = useState(false);
  const { theme } = useTheme();

  useEffect(() => {
    if (throwError) {
      throw new Error('Test Error');
    }
  }, [throwError]);

  return (
    <div className={`${styles.app} ${styles[theme]}`}>
      <SearchSection />
      <hr />
      <div className={styles.mainContent}>
        <ResultsSection />
        {children}
      </div>
      <hr />
      <Pagination />
    </div>
  );
};

export default Layout;
