import { Link, useLocation } from 'react-router-dom';
import styles from './Pagination.module.css';

function Pagination() {
  const location = useLocation();
  const totalPages = 9;
  const currentPage = new URLSearchParams(location.search).get('page');
  const page = currentPage ? parseInt(currentPage) : 1;

  const renderPageLinks = () => {
    const pageLinks = [];
    for (let i = 1; i <= totalPages; i++) {
      pageLinks.push(
        <Link
          key={i}
          to={`?page=${i}`}
          className={`${styles.btnPage} ${page === i ? styles.active : ''}`}
        >
          {i}
        </Link>,
      );
    }
    return pageLinks;
  };

  return (
    <div className={styles.pagination}>
      <Link to={`?page=${page > 1 ? page - 1 : 1}`} className={styles.btnPage}>
        Previous
      </Link>
      {renderPageLinks()}
      <Link
        to={`?page=${page < totalPages ? page + 1 : totalPages}`}
        className={styles.btnPage}
      >
        Next
      </Link>
    </div>
  );
}

export default Pagination;
