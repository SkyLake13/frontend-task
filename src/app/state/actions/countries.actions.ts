import { createAction, props } from '@ngrx/store';

import { CountryResponse } from '@rest-countries';

export const getCountries = createAction('[Countries List] Get all countries');
export const getCountriesSuccess = createAction('[Countries List] Get all countries success', props<GetCountriesSuccess>());
export const getCountriesFailure = createAction('[Countries List] Get all countries failure', props<any>());


interface GetCountriesSuccess {
    countries : CountryResponse[]
}