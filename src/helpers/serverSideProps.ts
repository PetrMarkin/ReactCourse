import { ResponseData } from '../interfaces/interfaces';
import { API_URL } from './constants';

export const getServerSideProps = async (context: {
  query: { details: string };
}) => {
  const id: string = context.query.details;

  let data: ResponseData | null = null;
  const error: string | null = null;

  if (id) {
    try {
      const response = await fetch(`${API_URL}/people/${id}/`);
      if (!response.ok) {
        throw new Error('Failed to fetch');
      }
      data = (await response.json()) as ResponseData;
    } catch (err: unknown) {
      console.log(err);
    }
  }

  return {
    props: {
      initialData: data || null,
      initialError: error || null,
    },
  };
};
