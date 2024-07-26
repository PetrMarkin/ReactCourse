import { useSelector } from 'react-redux';
import { apiSlice } from '../../store/apiSlice';
import Card from '../Card/Card';
import styles from './CardList.module.css';
import { RootState } from '../../interfaces/interfaces';
import { useLocation } from 'react-router-dom';
import Loader from '../UI/Loader/Loader';

function CardList() {
  const location = useLocation();
  const currentPage = new URLSearchParams(location.search).get('page') || '1';
  const searchTerm = useSelector((state: RootState) => state.search.searchTerm);
  const {
    data: peopleData,
    isLoading: peopleLoading,
    isFetching,
    error,
  } = apiSlice.endpoints.getPeople.useQuery(currentPage);
  const searchResults = useSelector(
    (state: RootState) => state.search.searchResults,
  );

  const results = searchTerm ? searchResults : peopleData?.results;

  if (error) {
    console.error('Error fetching people data:', error);
    return <div>Error loading data</div>;
  }

  if (peopleLoading || isFetching) {
    return <Loader />;
  }
  if (!results) {
    return <div>No results found</div>;
  }

  const listItems = results.map((result, index) => (
    <Card key={result.name} index={index} item={result} />
  ));

  return <div className={styles.results}>{listItems}</div>;
}

export default CardList;
