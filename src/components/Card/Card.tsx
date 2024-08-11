'use client';

import { useRouter, useSearchParams } from 'next/navigation';
import { useTheme } from '../../helpers/Contexts/ThemeConstants';
import { CardProps } from '../../interfaces/interfaces';
import styles from './Card.module.css';
import { useSelectedItems } from '../../helpers/Contexts/SelectedItemsContext';

function Card({ item }: CardProps) {
  const { theme } = useTheme();
  const router = useRouter();
  const searchParams = useSearchParams();
  const { selectedItems, selectItem, deselectItem } = useSelectedItems();

  const isSelected = selectedItems.some(
    (selectedItem) => selectedItem.url === item.url,
  );

  const handleCheckboxChange = () => {
    if (isSelected) {
      deselectItem(item.url);
    } else {
      selectItem(item);
    }
  };

  const handleCardClick = (event: React.MouseEvent<HTMLDivElement>) => {
    if ((event.target as HTMLElement).tagName === 'INPUT') {
      return;
    }
    const cardId = item.url.split('/').slice(-2, -1)[0];
    const currentPage = searchParams.get('page') || '1';
    try {
      router.push(`?page=${currentPage}&details=${cardId}`);
    } catch (error) {
      console.error('Failed to navigate:', error);
    }
  };

  return (
    <div
      className={`${styles.resultItem} ${styles[theme]}`}
      data-testid='result-item'
      onClick={handleCardClick}
    >
      <h3>{item.name}</h3>
      <div className={styles[theme]}>
        <input
          className={styles.selectedCheckbox}
          type='checkbox'
          checked={isSelected}
          onChange={handleCheckboxChange}
        />
      </div>
    </div>
  );
}

export default Card;
