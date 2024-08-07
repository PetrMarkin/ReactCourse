import { ReactNode } from 'react';

export interface Result {
  name: string;
  height: string;
  mass: string;
  hair_color: string;
  skin_color: string;
  eye_color: string;
  birth_year: string;
  gender: string;
  homeworld: string;
  films: Array<string>;
  species: Array<string>;
  vehicles: Array<string>;
  starships: Array<string>;
  created: string;
  edited: string;
  url: string;
}

export interface Props {
  children: ReactNode;
}

export interface State {
  hasError: boolean;
}

export interface CardProps {
  index?: number;
  item: Result;
  onClick?: () => void;
  onClose?: () => void;
}

export interface ResultsSectionProps {
  results: Result[];
}

export interface ResponseData {
  count: number;
  next: string;
  previous: null;
  results: Array<Result>;
}

export interface InputProps {
  searchTerm: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export interface ButtonProps {
  onClick: () => void;
  children: React.ReactNode;
}

export interface SearchSectionProps extends InputProps {
  onSearch: () => void;
  onThrowError: () => void;
}

export interface ThemeContextType {
  theme: string;
  toggleTheme: () => void;
}

export interface ThemeProviderProps {
  children: ReactNode;
}

export interface SearchState {
  searchTerm: string;
  throwError: boolean;
  searchResults: Result[];
}

export interface RootState {
  pagination: PaginationState;
  search: SearchState;
  selectedItems: SelectedItemsState;
}

export interface DetailedCardProps {
  data: Result;
}

export interface SelectedItemsState {
  selectedItems: Result[];
}

export interface PaginationState {
  currentPage: number;
}
