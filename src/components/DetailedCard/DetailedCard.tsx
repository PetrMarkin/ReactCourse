import { useEffect } from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';
import useOutsideClick from '../../hooks/useOutsideClick';
import { Result } from '../../interfaces/interfaces';
import styles from './DetailedCard.module.css';
import Button from '../UI/Button/Button';
import { useTheme } from '../../helpers/Contexts/ThemeConstants';

function DetailedCard() {
  const item = useLoaderData() as Result;
  const navigate = useNavigate();
  const { ref, isActive, setIsActive } = useOutsideClick(true);
  const { theme } = useTheme();

  useEffect(() => {
    if (!isActive) {
      navigate(-1);
    }
  }, [isActive, navigate]);

  return (
    <div className={`${styles.detailedCard}  ${styles[theme]}`} ref={ref}>
      <Button
        data-testid='close'
        onClick={() => {
          setIsActive(false);
        }}
      >
        Close
      </Button>
      <div className={`${styles.resultItem} ${styles[theme]}`}>
        <h3>{item.name}</h3>
        <p>Height: {item.height}</p>
        <p>Mass: {item.mass}</p>
        <p>Hair Color: {item.hair_color}</p>
        <p>Skin Color: {item.skin_color}</p>
        <p>Eye Color: {item.eye_color}</p>
        <p>Birth Year: {item.birth_year}</p>
        <p>Gender: {item.gender}</p>
      </div>
    </div>
  );
}

export default DetailedCard;
