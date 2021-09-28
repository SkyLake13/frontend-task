import { createSelector } from '@ngrx/store';
import { AppState } from '../app.state';

import { CountryState } from '../reducers/country.reducer';


export const selectCountryState = (state: AppState) => state.country;

export const selectCountry = createSelector(
    selectCountryState,
  (state: CountryState) => state.countryDetail,
);

export const selectCountryError = createSelector(
  selectCountryState,
(state: CountryState) => state.error,
);

