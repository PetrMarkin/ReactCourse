import { SearchSectionProps } from '../../interfaces/interfaces';
import Button from '../UI/Button/Button';
import SearchInput from '../UI/SearchInput/SearchInput';
import styles from './SearchSection.module.css';

function SearchSection({
  searchTerm,
  onSearch,
  onChange,
  onThrowError,
}: SearchSectionProps) {
  return (
    <div className={styles.searchSection}>
      <SearchInput searchTerm={searchTerm} onChange={onChange} />
      <Button onClick={onSearch}>Search</Button>
      <Button onClick={onThrowError}>Throw Error</Button>
    </div>
  );
}

export default SearchSection;
