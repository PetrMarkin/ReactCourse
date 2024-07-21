import { ResponseData } from '../interfaces/interfaces';
import { API_URL } from './constants';

export async function getPeople(page: string = '1'): Promise<ResponseData> {
  const headers = new Headers();
  headers.append('Content-Type', 'application/json');

  const url = `${API_URL}/?page=${page}`;

  const requestOptions = {
    method: 'GET',
    headers,
  };

  const response = await fetch(url, requestOptions);
  const responseData: ResponseData = (await response.json()) as ResponseData;
  if (!response.ok) {
    throw new Error('An error occurred while searching people.');
  }

  return responseData;
}

export async function searchPeople(people: string): Promise<ResponseData> {
  const headers = new Headers();
  headers.append('Content-Type', 'application/json');

  const url = `${API_URL}?search=${people}`;

  const requestOptions = {
    method: 'GET',
    headers,
  };

  const response = await fetch(url, requestOptions);
  const responseData: ResponseData = (await response.json()) as ResponseData;
  if (!response.ok) {
    throw new Error('An error occurred while searching people.');
  }

  return responseData;
}

export const getPersonById = async (id: string) => {
  const response = await fetch(`https://swapi.dev/api/people/${id}/`);
  if (!response.ok) {
    throw new Error('Failed to fetch data');
  }
  const data: ResponseData = (await response.json()) as ResponseData;
  return data;
};
