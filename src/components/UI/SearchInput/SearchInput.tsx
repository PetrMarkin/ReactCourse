import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useTheme } from '../../../helpers/Contexts/ThemeConstants';
import styles from './SearchInput.module.css';
import { setSearchTerm } from '../../../store/searchSlice';
import { RootState } from '../../../interfaces/interfaces';

function SearchInput() {
  const { theme } = useTheme();
  const dispatch = useDispatch();
  const searchTerm = useSelector((state: RootState) => state.search.searchTerm);

  const handleChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const searchTerm = event.target.value;
      dispatch(setSearchTerm(searchTerm));
    },
    [dispatch],
  );

  return (
    <input
      type='text'
      value={searchTerm}
      onChange={handleChange}
      placeholder='Search your character'
      className={`${styles.searchInput} ${styles[theme]}`}
    />
  );
}

export default SearchInput;
