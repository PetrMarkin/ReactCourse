'use client';

import { useRef } from 'react';
import styles from './SelectedItems.module.css';
import { useTheme } from '../../helpers/Contexts/ThemeConstants';
import Button from '../UI/Button/Button';
import { useSelectedItems } from '../../helpers/Contexts/SelectedItemsContext';

function SelectedItems() {
  const { selectedItems, deselectItem } = useSelectedItems();
  const { theme } = useTheme();
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
      films: item.films.join(', '),
      species: item.species.join(', '),
      created: item.created,
      edited: item.edited,
      url: item.url,
    }));

    const csvContent = [
      [
        'Name',
        'Height',
        'Mass',
        'Homeworld',
        'Films',
        'Species',
        'Created',
        'Edited',
        'Url',
      ],
      ...dataToDownload.map((item) => [
        item.name,
        item.height,
        item.mass,
        item.homeworld,
        item.films,
        item.species,
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
    selectedItems.forEach((item) => deselectItem(item.url));
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
        <a role='link' ref={downloadLinkRef} style={{ display: 'none' }}></a>
      </div>
    </div>
  );
}

export default SelectedItems;
