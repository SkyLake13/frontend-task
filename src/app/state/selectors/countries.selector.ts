import { createSelector } from '@ngrx/store';
import { AppState } from '../app.state';

import { CountriesState } from '../reducers/countries.reducer';


export const selectCountriesState = (state: AppState) => state.countryList;

export const selectCountries = createSelector(
  selectCountriesState,
  (state: CountriesState) => state.countries,
);

export const selectCountriesError = createSelector(
  selectCountriesState,
  (state: CountriesState) => state.error,
);

