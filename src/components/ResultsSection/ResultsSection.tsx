import { RootState } from '../../interfaces/interfaces';
import styles from './ResultsSection.module.css';
import CardList from '../CardList/CardList';
import SelectedItems from '../SelectedItems/SelectedItems';
import { useSelector } from 'react-redux';
import React from 'react';

const ResultsSection: React.FC = () => {
  const selectedItems = useSelector(
    (state: RootState) => state.selectedItems.selectedItems,
  );

  return (
    <>
      <div data-testid='card-list' className={styles.resultsSection}>
        <CardList />
        {selectedItems.length ? <SelectedItems /> : <></>}
      </div>
    </>
  );
};

export default ResultsSection;
