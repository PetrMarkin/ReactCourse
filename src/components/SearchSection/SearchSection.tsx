import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../interfaces/interfaces';
import {
  setSearchTerm,
  toggleThrowError,
  setSearchResults,
} from '../../store/searchSlice';
import { apiSlice } from '../../store/apiSlice';
import Button from '../UI/Button/Button';
import SearchInput from '../UI/SearchInput/SearchInput';
import ThemeSwitcher from '../UI/ThemeSwitcher/ThemeSwitcher';
import styles from './SearchSection.module.css';
import useSearchQuery from '../../hooks/useSearchQuery';

function SearchSection() {
  const dispatch = useDispatch();
  const [searchQuery, setSearchQuery] = useSearchQuery('searchQuery', '');
  const searchTerm = useSelector((state: RootState) => state.search.searchTerm);
  const [triggerSearch] = apiSlice.endpoints.searchPeople.useLazyQuery();

  useEffect(() => {
    const fetchSearchResults = async () => {
      try {
        dispatch(setSearchTerm(searchQuery));
        if (searchQuery) {
          const result = await triggerSearch(searchQuery).unwrap();
          if (result) {
            dispatch(setSearchResults(result.results));
          }
        }
      } catch (error) {
        console.error('Error fetching search results:', error);
      }
    };
    void fetchSearchResults();
  }, [dispatch, searchQuery, triggerSearch]);

  const handleSearch = async () => {
    setSearchQuery(searchTerm);
    const result = await triggerSearch(searchTerm).unwrap();
    if (result) {
      dispatch(setSearchResults(result.results));
      setSearchQuery(searchTerm);
      localStorage.setItem('searchResults', JSON.stringify(result.results));
    }
  };

  const handleThrowError = () => {
    dispatch(toggleThrowError());
  };

  return (
    <div className={styles.searchSection}>
      <SearchInput />
      <Button onClick={handleSearch}>Search</Button>
      <Button onClick={handleThrowError}>Throw Error</Button>
      <ThemeSwitcher />
    </div>
  );
}

export default SearchSection;
