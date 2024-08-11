'use client';

import { Result } from '../../interfaces/interfaces';
import Card from '../Card/Card';
import styles from './CardList.module.css';

interface CardListProps {
  data: Result[];
}

function CardList({ data }: CardListProps) {
  const results = data;

  if (!results || results.length === 0) {
    return <div>No results found</div>;
  }

  const listItems = results.map((result, index) => (
    <Card key={result.name} index={index} item={result} />
  ));

  return <div className={styles.results}>{listItems}</div>;
}

export default CardList;
