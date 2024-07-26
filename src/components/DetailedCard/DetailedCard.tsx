import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import useOutsideClick from '../../hooks/useOutsideClick';
import styles from './DetailedCard.module.css';
import Button from '../UI/Button/Button';
import { useTheme } from '../../helpers/Contexts/ThemeConstants';
import Loader from '../UI/Loader/Loader';
import { apiSlice } from '../../store/apiSlice';

function DetailedCard() {
  const navigate = useNavigate();
  const { ref, isActive, setIsActive } = useOutsideClick(true);
  const { theme } = useTheme();
  const { id } = useParams<{ id: string }>();
  const { data, error, isLoading } = apiSlice.endpoints.getPersonById.useQuery(
    id!,
  );

  useEffect(() => {
    setIsActive(true);
  }, [id, setIsActive]);

  useEffect(() => {
    if (!isActive) {
      navigate(-1);
    }
  }, [isActive, navigate]);

  if (isLoading) return <Loader />;
  if (error) return <div>Error: {JSON.stringify(error)}</div>;

  if (!data) return <div>No data available</div>;

  return (
    <div className={`${styles.detailedCard} ${styles[theme]}`} ref={ref}>
      <Button
        data-testid='close'
        onClick={() => {
          setIsActive(false);
        }}
      >
        Close
      </Button>
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
    </div>
  );
}

export default DetailedCard;
