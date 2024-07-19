import { useTheme } from '../../../helpers/Contexts/ThemeConstants';
import { InputProps } from '../../../interfaces/interfaces';
import styles from './SearchInput.module.css';

function SearchInput({ searchTerm, onChange }: InputProps) {
  const { theme } = useTheme();

  return (
    <input
      type='text'
      value={searchTerm}
      onChange={onChange}
      placeholder='Search your character'
      className={`${styles.searchInput} ${styles[theme]}`}
    />
  );
}

export default SearchInput;
