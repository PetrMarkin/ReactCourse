import { ResultsSectionProps } from '../interfaces/interfaces';
import Card from './Card';

function ResultsSection({ results, onCardClick }: ResultsSectionProps) {
  return (
    <div className='results-section'>
      {results.map((item, index) => (
        <Card key={index} item={item} onClick={() => onCardClick(item)} />
      ))}
    </div>
  );
}

export default ResultsSection;
