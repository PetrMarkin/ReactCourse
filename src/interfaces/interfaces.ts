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

export interface CardProps {
  index?: number;
  item: Result;
  onClick?: () => void;
  onClose?: () => void;
}

export interface ResultsSectionProps {
  results: Result[];
  onCardClick: (item: Result) => void;
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
