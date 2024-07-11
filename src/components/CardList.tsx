import { Result } from '../api';
import Card from './Card';

interface CardListProps {
  results: Result[];
}

function CardList({ results }: CardListProps) {
  if (!results) {
    return null;
  }

  const listItems = results.map((result, index) => (
    <Card key={result.name} index={index} item={result}></Card>
  ));
  return <div className='results'>{listItems}</div>;
}

export default CardList;
