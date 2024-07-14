import { CardProps } from '../interfaces/interfaces';

function Card({ index, item, onClick }: CardProps) {
  return (
    <div className='result-item' key={index} onClick={onClick}>
      <h3>{item.name}</h3>
    </div>
  );
}

export default Card;
