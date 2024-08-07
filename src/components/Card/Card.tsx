import { useRouter } from 'next/router';
import { useTheme } from '../../helpers/Contexts/ThemeConstants';
import { CardProps, RootState } from '../../interfaces/interfaces';
import styles from './Card.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { deselectItem, selectItem } from '../../store/selectedItemsSlice';

function Card({ item }: CardProps) {
  const { theme } = useTheme();
  const router = useRouter();
  const currentPage = router.query.page || '1';
  const dispatch = useDispatch();
  const selectedItems = useSelector(
    (state: RootState) => state.selectedItems.selectedItems,
  );

  const handleCheckboxChange = () => {
    if (selectedItems.some((selectedItem) => selectedItem.url === item.url)) {
      dispatch(deselectItem(item.url));
    } else {
      dispatch(selectItem(item));
    }
  };

  const handleCardClick = async (
    event: React.MouseEvent<HTMLDivElement>,
  ): Promise<void> => {
    if ((event.target as HTMLElement).tagName === 'INPUT') {
      return;
    }
    const cardId = item.url.split('/').slice(-2, -1)[0];
    if (typeof currentPage === 'string') {
      try {
        await router.push(`?page=${currentPage}&details=${cardId}`, undefined, {
          shallow: true,
        });
      } catch (error) {
        console.error('Failed to navigate:', error);
      }
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
          checked={selectedItems.some(
            (selectedItem) => selectedItem.url === item.url,
          )}
          onChange={handleCheckboxChange}
        />
      </div>
    </div>
  );
}

export default Card;
