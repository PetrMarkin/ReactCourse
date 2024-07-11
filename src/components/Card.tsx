import { Result } from '../api';

interface CardProps {
  index: number;
  item: Result;
}

function Card({ index, item }: CardProps) {
  return (
    <div className='result-item' key={index}>
      <h3>{item.name}</h3>
      <p>Height: {item.height}</p>
      <p>Mass: {item.mass}</p>
      <p>Hair Color: {item.hair_color}</p>
      <p>Skin Color: {item.skin_color}</p>
      <p>Eye Color: {item.eye_color}</p>
      <p>Birth Year: {item.birth_year}</p>
      <p>Gender: {item.gender}</p>
    </div>
  );
}

export default Card;
