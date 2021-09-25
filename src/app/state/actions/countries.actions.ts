import { createAction, props } from '@ngrx/store';

import { CountryResponse } from '@rest-countries';

export const getCountries = createAction('[Countries List] Get all countries');
export const getCountriesSuccess = createAction('[Countries List] Get all countries success', props<GetCountriesSuccess>())

export const getCountry = createAction('[Country detail] Get country by code', props<{ code: string }>());
export const getCountrySuccess = createAction('[Country detail] Get country by code success', props<{ country: CountryResponse }>());

interface GetCountriesSuccess {
    countries : CountryResponse[]
}