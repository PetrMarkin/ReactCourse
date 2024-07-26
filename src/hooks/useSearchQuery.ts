import { useState, useEffect } from 'react';

function useSearchQuery(
  key: string,
  initialValue: string,
): [string, React.Dispatch<React.SetStateAction<string>>] {
  const [query, setQuery] = useState<string>(() => {
    const savedQuery = localStorage.getItem(key);
    return savedQuery ? (JSON.parse(savedQuery) as string) : initialValue;
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(query));
  }, [key, query]);

  return [query, setQuery] as const;
}

export default useSearchQuery;
