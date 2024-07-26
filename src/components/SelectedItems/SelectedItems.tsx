import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import styles from './SelectedItems.module.css';
import { useTheme } from '../../helpers/Contexts/ThemeConstants';
import Button from '../UI/Button/Button';
import { clearSelectedItems } from '../../store/selectedItemsSlice';
import { useRef } from 'react';

function ItemList() {
  const { theme } = useTheme();
  const selectedItems = useSelector(
    (state: RootState) => state.selectedItems.selectedItems,
  );
  const dispatch = useDispatch();
  const downloadLinkRef = useRef<HTMLAnchorElement | null>(null);

  const downloadItems = () => {
    if (selectedItems.length === 0) {
      alert('No items selected');
      return;
    }

    const dataToDownload = selectedItems.map((item) => ({
      name: item.name,
      height: item.height,
      mass: item.mass,
      homeworld: item.homeworld,
      films: item.films,
      species: item.species,
      created: item.created,
      edited: item.edited,
      url: item.url,
    }));

    const csvContent = [
      ['Name', 'Height', 'Mass', 'Homeworld', 'Created', 'Edited', 'Url'],
      ...dataToDownload.map((item) => [
        item.name,
        item.height,
        item.mass,
        item.homeworld,
        item.created,
        item.edited,
        item.url,
      ]),
    ]
      .map((e) => e.join(','))
      .join('\n');

    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const href = URL.createObjectURL(blob);

    if (downloadLinkRef.current) {
      downloadLinkRef.current.href = href;
      downloadLinkRef.current.download = `${selectedItems.length}_characters.csv`;
      downloadLinkRef.current.click();
      URL.revokeObjectURL(href);
    }
  };

  const unselectAll = () => {
    dispatch(clearSelectedItems());
  };

  return (
    <div
      data-testid='selected-items'
      className={`${styles.selectedContainer} ${styles[theme]}`}
    >
      <h3 className={`${styles.itemsTitle} ${theme}`}>Selected Items:</h3>
      <ul className={`${styles.itemsList} ${theme}`}>
        {selectedItems.map((item) => (
          <li className={`${styles.item} ${theme}`} key={item.url}>
            {item.name}
          </li>
        ))}
      </ul>
      <div className={`${styles.btnsContainer} ${theme}`}>
        <Button onClick={unselectAll}>Unselect all</Button>
        <Button onClick={downloadItems}>Download</Button>
        <a ref={downloadLinkRef}></a>
      </div>
    </div>
  );
}

export default ItemList;
