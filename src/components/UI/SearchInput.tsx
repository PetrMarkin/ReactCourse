import { InputProps } from '../../interfaces/interfaces';

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
