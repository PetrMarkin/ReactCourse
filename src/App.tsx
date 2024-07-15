import React, { useCallback, useEffect, useState } from 'react';
import './App.css';
import { getPeople, searchPeople } from './helpers/api';
import SearchSection from './components/SearchSection';
import ResultsSection from './components/ResultsSection';
import Loader from './components/UI/Loader';
import { useSearchQuery } from './hooks/useSearchQuery';
import { Result } from './interfaces/interfaces';
import Pagination from './components/Pagination';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './store/store';

function App() {
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [results, setResults] = useState<Result[]>([]);
  const [throwError, setThrowError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [searchQuery, setSearchQuery] = useSearchQuery('searchQuery', '');
  const location = useLocation();
  const navigate = useNavigate();
  const currentPage = new URLSearchParams(location.search).get('page') || '1';

  const fetchResults = useCallback(
    async (query: string = '', page: string = '1') => {
      setIsLoading(true);
      try {
        const data = query
          ? await searchPeople(query.trim())
          : await getPeople(page);
        setResults(data.results);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setIsLoading(false);
      }
    },
    [],
  );

  useEffect(() => {
    if (searchQuery && typeof searchQuery === 'string') {
      setSearchTerm(searchQuery);
      fetchResults(searchQuery, currentPage)
        .then()
        .catch((error) => {
          console.error('Error in handleSearchClick:', error);
        });
    } else {
      fetchResults('', currentPage)
        .then()
        .catch((error) => {
          console.error('Error in handleSearchClick:', error);
        });
    }
  }, [searchQuery, fetchResults, currentPage]);

  const handleSearch = useCallback(() => {
    fetchResults(searchTerm)
      .then(() => {
        setSearchQuery(searchTerm);
      })
      .catch((error) => {
        console.error('Error in handleSearchClick:', error);
      });
  }, [fetchResults, searchTerm, setSearchQuery]);

  const handleChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setSearchTerm(event.target.value);
    },
    [],
  );

  const handleThrowError = useCallback(() => {
    setThrowError(true);
  }, []);

  if (throwError) {
    throw new Error('Test Error');
  }

  function handleCardClick(item: Result): void {
    const cardId = item.url.split('/').slice(-2, -1)[0];
    navigate(`details/${cardId}/?page=${currentPage}`);
  }

  return (
    <Provider store={store}>
      <div className='app'>
        <SearchSection
          searchTerm={searchTerm}
          onSearch={handleSearch}
          onChange={handleChange}
          onThrowError={handleThrowError}
        />
        <hr />
        {isLoading ? (
          <Loader />
        ) : (
          <div className='main-content'>
            <ResultsSection results={results} onCardClick={handleCardClick} />
            <Outlet />
          </div>
        )}
        <Pagination />
      </div>
    </Provider>
  );
}

export default App;
