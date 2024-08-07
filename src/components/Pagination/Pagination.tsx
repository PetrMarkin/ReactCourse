import Link from 'next/link';
import styles from './Pagination.module.css';
import { useTheme } from '../../helpers/Contexts/ThemeConstants';
import { useSelector, useDispatch } from 'react-redux';
import { setPage } from '../../store/paginationSlice';
import { RootState } from '../../store/store';

function Pagination() {
  const dispatch = useDispatch();
  const totalPages = 9;
  const currentPage = useSelector(
    (state: RootState) => state.pagination.currentPage,
  );
  const { theme } = useTheme();

  const handlePageChange = (page: number) => {
    dispatch(setPage(page));
  };

  const renderPageLinks = () => {
    const pageLinks = [];
    for (let i = 1; i <= totalPages; i++) {
      pageLinks.push(
        <Link key={i} href={`?page=${i}`}>
          <span
            onClick={() => handlePageChange(i)}
            className={`${styles.btnPage} ${styles[theme]} ${currentPage === i ? styles.active : ''}`}
          >
            {i}
          </span>
        </Link>,
      );
    }
    return pageLinks;
  };

  return (
    <div className={styles.pagination}>
      <Link href={`?page=${currentPage > 1 ? currentPage - 1 : 1}`}>
        <span
          onClick={() =>
            handlePageChange(currentPage > 1 ? currentPage - 1 : 1)
          }
          className={`${styles.btnPage} ${styles[theme]}`}
        >
          Previous
        </span>
      </Link>
      {renderPageLinks()}
      <Link
        href={`?page=${currentPage < totalPages ? currentPage + 1 : totalPages}`}
      >
        <span
          onClick={() =>
            handlePageChange(
              currentPage < totalPages ? currentPage + 1 : totalPages,
            )
          }
          className={`${styles.btnPage} ${styles[theme]}`}
        >
          Next
        </span>
      </Link>
    </div>
  );
}

export default Pagination;
