import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { ResponseData, Result } from '../interfaces/interfaces';
import { API_URL } from '../helpers/constants';

export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: API_URL }),
  endpoints: (builder) => ({
    searchPeople: builder.query<ResponseData, string>({
      query: (people) => `people/?search=${people}`,
    }),
    getPersonById: builder.query<Result, string>({
      query: (id) => `people/${id}/`,
    }),
  }),
});
