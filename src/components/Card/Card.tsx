import { useLocation, useNavigate } from 'react-router-dom';
import { useTheme } from '../../helpers/Contexts/ThemeConstants';
import { CardProps } from '../../interfaces/interfaces';
import styles from './Card.module.css';

function Card({ item }: CardProps) {
  const { theme } = useTheme();
  const navigate = useNavigate();
  const location = useLocation();
  const currentPage = new URLSearchParams(location.search).get('page') || '1';

  const handleCardClick = (): void => {
    const cardId = item.url.split('/').slice(-2, -1)[0];
    navigate(`details/${cardId}/?page=${currentPage}`);
  };

  return (
    <div
      className={`${styles.resultItem} ${styles[theme]}`}
      data-testid='result-item'
      onClick={handleCardClick}
    >
      <h3>{item.name}</h3>
    </div>
  );
}

export default Card;
