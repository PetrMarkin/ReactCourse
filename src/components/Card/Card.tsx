import { useTheme } from '../../helpers/Contexts/ThemeConstants';
import { CardProps } from '../../interfaces/interfaces';
import styles from './Card.module.css';

function Card({ index, item, onClick }: CardProps) {
  const { theme } = useTheme();

  return (
    <div
      className={`${styles.resultItem} ${styles[theme]}`}
      data-testid='result-item'
      key={index}
      onClick={onClick}
    >
      <h3>{item.name}</h3>
    </div>
  );
}

export default Card;
