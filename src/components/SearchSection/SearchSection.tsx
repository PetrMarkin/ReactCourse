import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ResponseData, RootState } from '../../interfaces/interfaces';
import {
  setSearchTerm,
  toggleThrowError,
  setSearchResults,
} from '../../store/searchSlice';
import { useLazySearchPeopleQuery } from '../../store/apiSlice';
import Button from '../UI/Button/Button';
import SearchInput from '../UI/SearchInput/SearchInput';
import ThemeSwitcher from '../UI/ThemeSwitcher/ThemeSwitcher';
import styles from './SearchSection.module.css';

function SearchSection() {
  const dispatch = useDispatch();
  const searchTerm = useSelector((state: RootState) => state.search.searchTerm);
  const [triggerSearch] = useLazySearchPeopleQuery();

  const handleSearch = () => {
    (async () => {
      await triggerSearch(searchTerm)
        .unwrap()
        .then((data) => dispatch(setSearchResults(data.results)))
        .catch((error) => console.log(error));
    })();
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setSearchTerm(event.target.value));
  };

  const handleThrowError = () => {
    dispatch(toggleThrowError());
  };

  return (
    <div className={styles.searchSection}>
      <SearchInput searchTerm={searchTerm} onChange={handleChange} />
      <Button onClick={handleSearch}>Search</Button>
      <Button onClick={handleThrowError}>Throw Error</Button>
      <ThemeSwitcher />
    </div>
  );
}

export default SearchSection;
