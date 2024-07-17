import { CardProps } from '../../interfaces/interfaces';
import styles from './Card.module.css';

function Card({ index, item, onClick }: CardProps) {
  return (
    <div
      className={styles.resultItem}
      data-testid='result-item'
      key={index}
      onClick={onClick}
    >
      <h3>{item.name}</h3>
    </div>
  );
}

export default Card;
