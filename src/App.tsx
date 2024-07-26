import { useEffect, useState } from 'react';
import styles from './App.module.css';
import SearchSection from './components/SearchSection/SearchSection';
import ResultsSection from './components/ResultsSection/ResultsSection';
import Pagination from './components/Pagination/Pagination';
import { Outlet } from 'react-router-dom';
import { useTheme } from './helpers/Contexts/ThemeConstants';

function App() {
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
        <Outlet />
      </div>
      <hr />
      <Pagination />
    </div>
  );
}

export default App;
