import { LoaderFunctionArgs } from 'react-router-dom';
import { getPersonById } from '../helpers/api';

export const CardLoader = async ({ params }: LoaderFunctionArgs) => {
  const { cardId } = params;
  if (!cardId) throw new Error('Card ID parameter is missing');
  const data = await getPersonById(cardId.slice(-1));
  return data;
};
