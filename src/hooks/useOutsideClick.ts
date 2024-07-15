import { useState, useEffect, useRef } from 'react';

const useOutsideClick = (initialValue: boolean) => {
  const [isActive, setIsActive] = useState(initialValue);
  const ref = useRef<HTMLDivElement | null>(null);

  const handleClick = (e: MouseEvent) => {
    if (ref.current && !ref.current.contains(e.target as Node)) {
      setIsActive(false);
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      document.addEventListener('click', handleClick);
    }, 0);

    return () => {
      clearTimeout(timer);
      document.removeEventListener('click', handleClick);
    };
  }, []);

  return { ref, isActive, setIsActive };
};

export default useOutsideClick;
