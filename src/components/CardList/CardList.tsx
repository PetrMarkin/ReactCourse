import Card from '../Card/Card';
import styles from './CardList.module.css';
import Loader from '../UI/Loader/Loader';
import { Result } from '../../interfaces/interfaces';

interface CardListProps {
  initialData: {
    results: Result[];
  } | null;
  isLoading: boolean;
}

function CardList({ initialData, isLoading }: CardListProps) {
  const results = initialData?.results;

  if (isLoading) {
    return <Loader />;
  }
  if (!results || results.length === 0) {
    return <div>No results found</div>;
  }

  const listItems = results.map((result, index) => (
    <Card key={result.name} index={index} item={result} />
  ));

  return <div className={styles.results}>{listItems}</div>;
}

export default CardList;
