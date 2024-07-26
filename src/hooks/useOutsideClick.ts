import { useEffect, useRef, useState } from 'react';

const useOutsideClick = (initialState: boolean) => {
  const [isActive, setIsActive] = useState(initialState);
  const ref = useRef<HTMLDivElement | null>(null);

  const handleClickOutside = (event: MouseEvent) => {
    if (ref.current && !ref.current.contains(event.target as Node)) {
      setIsActive(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return { ref, isActive, setIsActive };
};

export default useOutsideClick;
