import { createAction, props } from '@ngrx/store';

import { CountryResponse } from '@rest-countries';

export const getCountries = createAction('[Countries List] Get all countries');
export const getCountriesSuccess = createAction('[Countries List] Get all countries success', props<GetCountriesSuccess>())
export const filterCountries = createAction('[Countries List] filter countries list', props<FilterParams>());
export const getCountry = createAction('[Country detail] Get country by code', props<{ code: string }>());
export const getCountrySuccess = createAction('[Country detail] Get country by code success', props<{ country: CountryResponse }>());

interface FilterParams {
    name: string,
    region: string
}

interface GetCountriesSuccess {
    countries : CountryResponse[]
}