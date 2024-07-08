import React from 'react';
import Button from './Button';

interface SearchSectionProps {
  searchTerm: string;
  onSearch: () => void;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onThrowError: () => void;
}

class SearchSection extends React.Component<SearchSectionProps> {
  render() {
    const { searchTerm, onSearch, onChange, onThrowError } = this.props;
    return (
      <div className='top-section'>
        <input
          type='text'
          value={searchTerm}
          onChange={onChange}
          placeholder='Search your character'
        />
        <Button onClick={onSearch}>Search</Button>
        <Button onClick={onThrowError}>Throw Error</Button>
      </div>
    );
  }
}

export default SearchSection;
