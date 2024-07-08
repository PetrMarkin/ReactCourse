const API_URL = 'https://swapi.dev/api/people/';

export interface Result {
  name: string;
  height: string;
  mass: string;
  hair_color: string;
  skin_color: string;
  eye_color: string;
  birth_year: string;
  gender: string;
  homeworld: string;
  films: Array<string>;
  species: Array<string>;
  vehicles: Array<string>;
  starships: Array<string>;
  created: string;
  edited: string;
  url: string;
}

interface ResponseData {
  count: number;
  next: string;
  previous: null;
  results: Array<Result>;
}

export async function getPeople(): Promise<ResponseData> {
  const headers = new Headers();
  headers.append('Content-Type', 'application/json');

  const url = `${API_URL}`;

  const requestOptions = {
    method: 'GET',
    headers,
  };

  const response = await fetch(url, requestOptions);
  const responseData: ResponseData = await response.json();
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
  const responseData: ResponseData = await response.json();
  if (!response.ok) {
    throw new Error('An error occurred while searching people.');
  }

  return responseData;
}
