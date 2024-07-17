import { useState, useEffect, Dispatch, SetStateAction } from 'react';

export const useSearchQuery = (
  key: string,
  defData: string,
): [string, Dispatch<SetStateAction<string>>] => {
  const [searchQuery, setSearchQuery] = useState(() => {
    const localData = localStorage.getItem(key);
    return localData || defData;
  });

  useEffect(() => {
    return () => {
      localStorage.setItem(key, searchQuery);
    };
  }, [key, searchQuery]);

  return [searchQuery, setSearchQuery];
};
