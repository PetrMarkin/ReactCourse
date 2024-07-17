import { ResultsSectionProps } from '../../interfaces/interfaces';
import Card from '../Card/Card';
import styles from './ResultsSection.module.css';

function ResultsSection({ results, onCardClick }: ResultsSectionProps) {
  return (
    <div className={styles.resultsSection}>
      {results.map((item, index) => (
        <Card key={index} item={item} onClick={() => onCardClick(item)} />
      ))}
    </div>
  );
}

export default ResultsSection;
