import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import styles from './App.module.css';
import { useGetPeopleQuery } from './store/apiSlice';
import SearchSection from './components/SearchSection/SearchSection';
import ResultsSection from './components/ResultsSection/ResultsSection';
import Loader from './components/UI/Loader/Loader';
import Pagination from './components/Pagination/Pagination';
import { Outlet } from 'react-router-dom';
import { useTheme } from './helpers/Contexts/ThemeConstants';
import { RootState } from './interfaces/interfaces';

function App() {
  const [throwError] = useState(false);
  const location = useLocation();
  const currentPage = new URLSearchParams(location.search).get('page') || '1';
  const { theme } = useTheme();
  const searchTerm = useSelector((state: RootState) => state.search.searchTerm);
  const searchResults = useSelector(
    (state: RootState) => state.search.searchResults,
  );
  const {
    data: peopleData,
    isLoading: peopleLoading,
    isFetching,
  } = useGetPeopleQuery(currentPage);

  useEffect(() => {
    if (throwError) {
      throw new Error('Test Error');
    }
  }, [throwError]);

  const results = searchTerm ? searchResults : peopleData?.results;

  if (peopleLoading || isFetching) return <Loader />;

  return (
    <div className={`${styles.app} ${styles[theme]}`}>
      <SearchSection />
      <hr />
      {results ? (
        <div className={styles.mainContent}>
          <ResultsSection results={results} />
          <Outlet />
        </div>
      ) : (
        <div>Error loading data</div>
      )}
      <Pagination />
    </div>
  );
}

export default App;
