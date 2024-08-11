'use client';

import Button from '../UI/Button/Button';
import SearchInput from '../UI/SearchInput/SearchInput';
import ThemeSwitcher from '../UI/ThemeSwitcher/ThemeSwitcher';
import styles from './SearchSection.module.css';
import { SearchSectionProps } from '../../interfaces/interfaces';

function SearchSection({ searchTerm, onSearch, onChange }: SearchSectionProps) {
  return (
    <div className={styles.searchSection}>
      <SearchInput searchTerm={searchTerm} onChange={onChange} />
      <Button onClick={onSearch}>Search</Button>
      <ThemeSwitcher />
    </div>
  );
}

export default SearchSection;
