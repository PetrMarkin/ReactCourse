import { ResultsSectionProps } from '../interfaces/interfaces';
import Card from './Card';

function CardList({ results }: ResultsSectionProps) {
  if (!results) {
    return null;
  }

  const listItems = results.map((result, index) => (
    <Card key={result.name} index={index} item={result}></Card>
  ));
  return <div className='results'>{listItems}</div>;
}

export default CardList;
