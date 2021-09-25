import { createSelector } from '@ngrx/store';
import { AppState } from '../app.state';

import { CountriesState } from '../reducers/countries.reducer';


export const selectCountriesState = (state: AppState) => state.countries;

export const selectCountries = createSelector(
  selectCountriesState,
  (state: CountriesState) => state.countries,
);

export const selectFilter = createSelector(
  selectCountriesState,
  (state: CountriesState) => state.filter
);
