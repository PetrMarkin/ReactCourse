'use client';

import { useState, useEffect } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import styles from './Pagination.module.css';
import { useTheme } from '../../helpers/Contexts/ThemeConstants';

interface PaginationProps {
  totalPages: number;
  initialPage?: number;
}

const Pagination = ({ totalPages, initialPage = 1 }: PaginationProps) => {
  const [currentPage, setCurrentPage] = useState<number>(initialPage);
  const { theme } = useTheme();
  const router = useRouter();
  const searchParams = useSearchParams();

  useEffect(() => {
    const queryPage = searchParams.get('page');
    const page = queryPage ? parseInt(queryPage, 10) : initialPage;
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  }, [searchParams, initialPage, totalPages]);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    router.push(`?page=${page}`);
  };

  const renderPageLinks = () => {
    const pageLinks = [];
    for (let i = 1; i <= totalPages; i++) {
      pageLinks.push(
        <span
          key={i}
          onClick={() => handlePageChange(i)}
          className={`${styles.btnPage} ${styles[theme]} ${currentPage === i ? styles.active : ''}`}
        >
          {i}
        </span>,
      );
    }
    return pageLinks;
  };

  return (
    <div className={styles.pagination}>
      <span
        onClick={() => handlePageChange(currentPage > 1 ? currentPage - 1 : 1)}
        className={`${styles.btnPage} ${styles[theme]}`}
      >
        Previous
      </span>
      {renderPageLinks()}
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
    </div>
  );
};

export default Pagination;
