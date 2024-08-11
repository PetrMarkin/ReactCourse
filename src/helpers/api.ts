import { ResponseData, Result } from '../interfaces/interfaces';
import { API_URL } from './constants';

export async function fetchPeopleData(page: string): Promise<ResponseData> {
  const res = await fetch(`${API_URL}/people?page=${page}`);
  return (await res.json()) as ResponseData;
}

export const fetchPersonDetails = async (id: string): Promise<Result> => {
  const res = await fetch(`${API_URL}/people/${id}`);
  return (await res.json()) as Result;
};

export const fetchSearchResults = async (query: string) => {
  const res = await fetch(`${API_URL}/people/?search=${query}`);
  return (await res.json()) as ResponseData;
};
