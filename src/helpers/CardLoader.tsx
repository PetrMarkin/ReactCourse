import { LoaderFunctionArgs } from 'react-router-dom';
import { store } from '../store/store';
import { apiSlice } from '../store/apiSlice';

export const CardLoader = async ({ params }: LoaderFunctionArgs) => {
  const { cardId } = params;
  if (!cardId) throw new Error('Card ID parameter is missing');

  const result = await store.dispatch(
    apiSlice.endpoints.getPersonById.initiate(cardId),
  );

  if (result.error) {
    throw new Error('Failed to fetch data');
  }

  return result.data;
};
