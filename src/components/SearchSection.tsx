import React from 'react';
import Button from './Button';
import SearchInput from './SearchInput';

interface SearchSectionProps {
  searchTerm: string;
  onSearch: () => void;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onThrowError: () => void;
}

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
