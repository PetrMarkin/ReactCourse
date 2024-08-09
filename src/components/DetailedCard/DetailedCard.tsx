import { useRouter } from 'next/router';
import { useTheme } from '../../helpers/Contexts/ThemeConstants';
import useOutsideClick from '../../hooks/useOutsideClick';
import styles from './DetailedCard.module.css';
import Button from '../UI/Button/Button';
import Loader from '../UI/Loader/Loader';
import { apiSlice } from '../../store/apiSlice';
import { useEffect } from 'react';
import { Result } from '../../interfaces/interfaces';

interface DetailedCardProps {
  initialData: Result;
  onClose: () => void;
}

function DetailedCard({ initialData, onClose }: DetailedCardProps) {
  const router = useRouter();
  const id = router.query.details;
  const { ref, isActive } = useOutsideClick(true);
  const { theme } = useTheme();

  const { data: clientData, isLoading } =
    apiSlice.endpoints.getPersonById.useQuery(id as string, {
      skip: !!initialData,
    });

  useEffect(() => {
    if (!isActive) {
      onClose();
    }
  }, [isActive, onClose]);

  if (initialData) {
    return (
      <div className={`${styles.detailedCard} ${styles[theme]}`} ref={ref}>
        <Button data-testid='close' onClick={onClose}>
          Close
        </Button>
        <div className={`${styles.resultItem} ${styles[theme]}`}>
          <h3>{initialData.name}</h3>
          <p>Height: {initialData.height}</p>
          <p>Mass: {initialData.mass}</p>
          <p>Hair Color: {initialData.hair_color}</p>
          <p>Skin Color: {initialData.skin_color}</p>
          <p>Eye Color: {initialData.eye_color}</p>
          <p>Birth Year: {initialData.birth_year}</p>
          <p>Gender: {initialData.gender}</p>
        </div>
      </div>
    );
  }

  if (isLoading) return <Loader />;
  if (!clientData) return <div>No data available</div>;

  return (
    <div className={`${styles.detailedCard} ${styles[theme]}`} ref={ref}>
      <Button data-testid='close' onClick={onClose}>
        Close
      </Button>
      <div className={`${styles.resultItem} ${styles[theme]}`}>
        <h3>{clientData.name}</h3>
        <p>Height: {clientData.height}</p>
        <p>Mass: {clientData.mass}</p>
        <p>Hair Color: {clientData.hair_color}</p>
        <p>Skin Color: {clientData.skin_color}</p>
        <p>Eye Color: {clientData.eye_color}</p>
        <p>Birth Year: {clientData.birth_year}</p>
        <p>Gender: {clientData.gender}</p>
      </div>
    </div>
  );
}

export default DetailedCard;
