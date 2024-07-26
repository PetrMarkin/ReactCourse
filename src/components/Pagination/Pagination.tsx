import { Link, useLocation } from 'react-router-dom';
import styles from './Pagination.module.css';
import { useTheme } from '../../helpers/Contexts/ThemeConstants';

function Pagination() {
  const location = useLocation();
  const totalPages = 9;
  const currentPage = new URLSearchParams(location.search).get('page');
  const page = currentPage ? parseInt(currentPage) : 1;
  const { theme } = useTheme();

  const renderPageLinks = () => {
    const pageLinks = [];
    for (let i = 1; i <= totalPages; i++) {
      pageLinks.push(
        <Link
          key={i}
          to={`?page=${i}`}
          className={`${styles.btnPage} ${styles[theme]} ${page === i ? styles.active : ''}`}
        >
          {i}
        </Link>,
      );
    }
    return pageLinks;
  };

  return (
    <div className={styles.pagination}>
      <Link
        to={`?page=${page > 1 ? page - 1 : 1}`}
        className={`${styles.btnPage} ${styles[theme]}`}
      >
        Previous
      </Link>
      {renderPageLinks()}
      <Link
        to={`?page=${page < totalPages ? page + 1 : totalPages}`}
        className={`${styles.btnPage} ${styles[theme]}`}
      >
        Next
      </Link>
    </div>
  );
}

export default Pagination;
