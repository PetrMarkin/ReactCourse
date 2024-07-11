import React, { useCallback, useEffect, useState } from 'react';
import './App.css';
import { getPeople, searchPeople, Result } from './api';
import SearchSection from './components/SearchSection';
import ResultsSection from './components/ResultsSection';
import Loader from './components/Loader';
import { useSearchQuery } from './hooks/searchQuery';

function App() {
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [results, setResults] = useState<Result[]>([]);
  const [throwError, setThrowError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [searchQuery, setSearchQuery] = useSearchQuery('searchQuery', '');

  const fetchResults = useCallback(async (query: string = '') => {
    setIsLoading(true);
    try {
      const data = query ? await searchPeople(query.trim()) : await getPeople();
      setResults(data.results);
    } catch (error) {
      console.error('Error fetching data:', error);
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    setSearchTerm(searchQuery);
    if (searchTerm) {
      setSearchQuery(searchTerm);
      fetchResults(searchTerm)
        .then()
        .catch((error) => {
          console.error('Error in handleSearchClick:', error);
        });
    } else {
      fetchResults()
        .then()
        .catch((error) => {
          console.error('Error in handleSearchClick:', error);
        });
    }
  }, [searchTerm, searchQuery, fetchResults, setSearchQuery]);

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

  return (
    <div className='app'>
      <SearchSection
        searchTerm={searchTerm}
        onSearch={handleSearch}
        onChange={handleChange}
        onThrowError={handleThrowError}
      />
      <hr />
      {isLoading ? <Loader /> : <ResultsSection results={results} />}
    </div>
  );
}

export default App;
