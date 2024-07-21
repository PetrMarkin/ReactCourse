import React from 'react';
import { ResultsSectionProps } from '../../interfaces/interfaces';
import styles from './ResultsSection.module.css';
import CardList from '../CardList/CardList';

const ResultsSection: React.FC<ResultsSectionProps> = ({ results }) => {
  return (
    <div className={styles.resultsSection}>
      <CardList onCardClick={() => {}} results={results}></CardList>
    </div>
  );
};

export default ResultsSection;
