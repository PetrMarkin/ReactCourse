import { createSlice } from '@reduxjs/toolkit';
import { initialCountries } from '../helpers/contryData';

export type Country = (typeof initialCountries)[number];

export interface CountryState {
  countries: Country[];
}

const initialState: CountryState = {
  countries: initialCountries,
};

const countrySlice = createSlice({
  name: 'countries',
  initialState,
  reducers: {},
});

export const selectCountries = (state: { countries: CountryState }) =>
  state.countries.countries;

export default countrySlice.reducer;
