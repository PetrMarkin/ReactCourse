'use client';

import React, { Suspense, lazy, useCallback, useEffect, useState } from 'react';
import styles from './ClientLayout.module.css';
import { useTheme } from '../../helpers/Contexts/ThemeConstants';
import SearchSection from '../SearchSection/SearchSection';
import Pagination from '../Pagination/Pagination';
import SelectedItems from '../SelectedItems/SelectedItems';
import Loader from '../UI/Loader/Loader';
import { fetchPeopleData, fetchSearchResults } from '../../helpers/api';
import { Result } from '../../interfaces/interfaces';
import DetailedCard from '../DetailedCard/DetailedCard';
import useSearchQuery from '../../hooks/useSearchQuery';
import { useSearchParams } from 'next/navigation';
import { useSelectedItems } from '../../helpers/Contexts/SelectedItemsContext';

const CardList = lazy(() => import('../CardList/CardList'));

interface SearchParams {
  page?: string;
  searchTherm?: string;
  details?: string;
}

interface ClientLayoutProps {
  searchParams: SearchParams;
}

const ClientLayout = ({ searchParams }: ClientLayoutProps) => {
  const [data, setData] = useState<{ results: Result[] } | null>(null);
  const { selectedItems } = useSelectedItems();
  const [searchQuery, setSearchQuery] = useSearchQuery('searchQuery', '');
  const [searchTerm, setSearchTerm] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [details, setDetails] = useState<string | null>(null);
  const { theme } = useTheme();
  const searchParamsFromUrl = useSearchParams();

  const { page = '1' } = searchParams;

  const fetchResults = useCallback(
    async (query: string = '', page: string = '1') => {
      setIsLoading(true);
      try {
        const data = query
          ? await fetchSearchResults(query.trim())
          : await fetchPeopleData(page);
        setData(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setIsLoading(false);
      }
    },
    [],
  );

  useEffect(() => {
    if (searchParams.details) {
      setDetails(searchParams.details);
    }
  }, [searchParams.details]);

  useEffect(() => {
    fetchResults(searchQuery, page).catch((error) => {
      console.error('Error fetching results:', error);
    });
  }, [searchQuery, page, fetchResults]);

  useEffect(() => {
    const newParams = new URLSearchParams(searchParamsFromUrl.toString());
    const detailsParam = newParams.get('details');
    if (detailsParam) {
      setDetails(detailsParam);
    } else {
      setDetails(null);
    }
  }, [searchParamsFromUrl]);

  const handleSearch = useCallback(() => {
    setSearchQuery(searchTerm);
  }, [searchTerm, setSearchQuery]);

  const handleChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setSearchTerm(event.target.value);
    },
    [],
  );

  if (!data) return null;

  return (
    <div className={`${styles.app} ${styles[theme]}`}>
      <SearchSection
        searchTerm={searchTerm}
        onSearch={handleSearch}
        onChange={handleChange}
      />
      <hr />
      <div className={styles.mainContent}>
        {isLoading ? (
          <Loader />
        ) : (
          <Suspense fallback={<Loader />}>
            <CardList data={data.results} />
          </Suspense>
        )}
        {details && <DetailedCard id={details} />}
      </div>
      {selectedItems.length ? <SelectedItems /> : null}
      <hr />
      <Pagination totalPages={9} />
    </div>
  );
};

export default ClientLayout;
