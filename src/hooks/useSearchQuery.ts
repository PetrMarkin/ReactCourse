import { useEffect, useState } from 'react';

function useSearchQuery(
  key: string,
  initialValue: string,
): [string, React.Dispatch<React.SetStateAction<string>>] {
  const [query, setQuery] = useState<string>(initialValue);

  useEffect(() => {
    const savedQuery = localStorage.getItem(key);
    if (savedQuery) {
      setQuery(JSON.parse(savedQuery) as string);
    }
  }, [key]);

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(query));
  }, [key, query]);

  return [query, setQuery];
}

export default useSearchQuery;
