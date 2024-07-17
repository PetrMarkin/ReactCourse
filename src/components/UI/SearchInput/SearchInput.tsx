import { InputProps } from '../../../interfaces/interfaces';
import styles from './SearchInput.module.css';

function SearchInput({ searchTerm, onChange }: InputProps) {
  return (
    <input
      type='text'
      value={searchTerm}
      onChange={onChange}
      placeholder='Search your character'
      className={styles.searchInput}
    />
  );
}

export default SearchInput;
