import React from 'react';

interface InputProps {
  searchTerm: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

function SearchInput({ searchTerm, onChange }: InputProps) {
  return (
    <input
      type='text'
      value={searchTerm}
      onChange={onChange}
      placeholder='Search your character'
    />
  );
}

export default SearchInput;
