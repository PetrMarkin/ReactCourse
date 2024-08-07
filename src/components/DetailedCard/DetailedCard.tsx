import { useRouter } from 'next/router';
import { useTheme } from '../../helpers/Contexts/ThemeConstants';
import useOutsideClick from '../../hooks/useOutsideClick';
import styles from './DetailedCard.module.css';
import Button from '../UI/Button/Button';
import Loader from '../UI/Loader/Loader';
import { apiSlice } from '../../store/apiSlice';
import { Result } from '../../interfaces/interfaces';
import { useEffect } from 'react';

interface DetailedCardProps {
  initialData: Result;
  initialError: string | null;
  onClose: () => void;
}

function DetailedCard({
  initialData,
  initialError,
  onClose,
}: DetailedCardProps) {
  const router = useRouter();
  const id = router.query.details as string;
  const { ref, isActive } = useOutsideClick(true);
  const { theme } = useTheme();

  const { data: clientData, isLoading } =
    apiSlice.endpoints.getPersonById.useQuery(id, {
      skip: !!initialData,
    });

  useEffect(() => {
    if (!isActive) {
      onClose();
    }
  }, [isActive, onClose]);

  if (isLoading) return <Loader />;
  if (initialError) return <div>Error: {initialError}</div>;
  if (!initialData && !clientData) return <div>No data available</div>;

  const dataToDisplay = initialData || clientData;

  return (
    <div className={`${styles.detailedCard} ${styles[theme]}`} ref={ref}>
      <Button data-testid='close' onClick={() => onClose()}>
        Close
      </Button>
      <div className={`${styles.resultItem} ${styles[theme]}`}>
        <h3>{dataToDisplay.name}</h3>
        <p>Height: {dataToDisplay.height}</p>
        <p>Mass: {dataToDisplay.mass}</p>
        <p>Hair Color: {dataToDisplay.hair_color}</p>
        <p>Skin Color: {dataToDisplay.skin_color}</p>
        <p>Eye Color: {dataToDisplay.eye_color}</p>
        <p>Birth Year: {dataToDisplay.birth_year}</p>
        <p>Gender: {dataToDisplay.gender}</p>
      </div>
    </div>
  );
}

export default DetailedCard;
