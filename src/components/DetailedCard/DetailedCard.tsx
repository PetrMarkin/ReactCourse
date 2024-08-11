'use client';

import { useState, useEffect } from 'react';
import styles from './DetailedCard.module.css';
import Button from '../UI/Button/Button';
import { fetchPersonDetails } from '../../helpers/api';
import useOutsideClick from '../../hooks/useOutsideClick';
import Loader from '../UI/Loader/Loader';
import { Result } from '../../interfaces/interfaces';
import { useTheme } from '../../helpers/Contexts/ThemeConstants';
import { useRouter, useSearchParams } from 'next/navigation';

interface DetailedCardProps {
  id: string;
}

const DetailedCard = ({ id }: DetailedCardProps) => {
  const [data, setData] = useState<Result | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const { ref, isActive } = useOutsideClick(true);
  const { theme } = useTheme();
  const router = useRouter();
  const searchParams = useSearchParams();

  useEffect(() => {
    setIsLoading(true);
    const fetchData = async () => {
      try {
        const result = await fetchPersonDetails(id);
        setData(result);
      } catch (error) {
        console.error('Failed to fetch person details:', error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData().catch((error) => {
      console.error('Error fetching results:', error);
    });
  }, [id, isActive]);

  const handleClose = () => {
    const params = new URLSearchParams(searchParams?.toString());
    params.delete('details');
    router.push(`?${params.toString()}`);
  };

  if (!data) return null;

  return (
    <div
      className={`${styles.detailedCard} ${isActive ? styles.active : ''}`}
      ref={ref}
    >
      <Button data-testid='close' onClick={handleClose}>
        Close
      </Button>
      {isLoading ? (
        <Loader />
      ) : (
        <div className={`${styles.resultItem} ${styles[theme]}`}>
          <h3>{data.name}</h3>
          <p>Height: {data.height}</p>
          <p>Mass: {data.mass}</p>
          <p>Hair Color: {data.hair_color}</p>
          <p>Skin Color: {data.skin_color}</p>
          <p>Eye Color: {data.eye_color}</p>
          <p>Birth Year: {data.birth_year}</p>
          <p>Gender: {data.gender}</p>
        </div>
      )}
    </div>
  );
};

export default DetailedCard;
