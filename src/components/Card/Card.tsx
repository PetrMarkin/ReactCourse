import { useLocation, useNavigate } from 'react-router-dom';
import { useTheme } from '../../helpers/Contexts/ThemeConstants';
import { CardProps, RootState } from '../../interfaces/interfaces';
import styles from './Card.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { deselectItem, selectItem } from '../../store/selectedItemsSlice';

function Card({ item }: CardProps) {
  const { theme } = useTheme();
  const navigate = useNavigate();
  const location = useLocation();
  const currentPage = new URLSearchParams(location.search).get('page') || '1';
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

  const handleCardClick = (event: React.MouseEvent<HTMLDivElement>): void => {
    if ((event.target as HTMLElement).tagName === 'INPUT') {
      return;
    }
    const cardId = item.url.split('/').slice(-2, -1)[0];
    navigate(`details/${cardId}/?page=${currentPage}`);
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
          checked={selectedItems.includes(item)}
          onChange={handleCheckboxChange}
        />
      </div>
    </div>
  );
}

export default Card;
