import React from 'react';

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
        <button onClick={onSearch}>Search</button>
        <button onClick={onThrowError}>Throw Error</button>
      </div>
    );
  }
}

export default SearchSection;
