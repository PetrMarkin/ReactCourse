import { SearchSectionProps } from '../interfaces/interfaces';
import Button from './UI/Button';
import SearchInput from './UI/SearchInput';

function SearchSection({
  searchTerm,
  onSearch,
  onChange,
  onThrowError,
}: SearchSectionProps) {
  return (
    <div className='top-section'>
      <SearchInput searchTerm={searchTerm} onChange={onChange} />
      <Button onClick={onSearch}>Search</Button>
      <Button onClick={onThrowError}>Throw Error</Button>
    </div>
  );
}

export default SearchSection;
