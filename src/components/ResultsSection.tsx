import { Result } from '../api';
import CardList from './CardList';

interface ResultsSectionProps {
  results: Result[];
}

function ResultsSection({ results }: ResultsSectionProps) {
  return (
    <div className='bottom-section'>
      <CardList results={results} />
    </div>
  );
}

export default ResultsSection;
