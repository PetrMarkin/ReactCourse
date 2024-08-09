import { ReactNode, useEffect, useState } from 'react';
import styles from './Layout.module.css';
import { useTheme } from '../../helpers/Contexts/ThemeConstants';
import SearchSection from '../SearchSection/SearchSection';
import Pagination from '../Pagination/Pagination';
import CardList from '../CardList/CardList';
import { Result, RootState } from '../../interfaces/interfaces';
import SelectedItems from '../SelectedItems/SelectedItems';
import { useSelector } from 'react-redux';
import Loader from '../UI/Loader/Loader';

interface LayoutProps<TData = Result[]> {
  children: ReactNode;
  initialData: TData;
  isLoading: boolean;
}

const Layout = <TData extends { results: Result[] }>({
  children,
  initialData,
  isLoading,
}: LayoutProps<TData>) => {
  const [throwError] = useState(false);
  const { theme } = useTheme();
  const selectedItems = useSelector(
    (state: RootState) => state.selectedItems.selectedItems,
  );

  useEffect(() => {
    if (throwError) {
      throw new Error('Test Error');
    }
  }, [throwError]);

  return (
    <div className={`${styles.app} ${styles[theme]}`}>
      <SearchSection />
      <hr />
      <div className={styles.mainContent}>
        {isLoading ? (
          <Loader />
        ) : (
          <CardList initialData={initialData} isLoading={isLoading} />
        )}

        {children}
      </div>
      {selectedItems.length ? <SelectedItems /> : <></>}
      <hr />
      <Pagination />
    </div>
  );
};

export default Layout;
