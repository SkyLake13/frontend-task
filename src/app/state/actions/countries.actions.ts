import { createAction, props } from '@ngrx/store';
import { CountryResponse } from '../../rest-countries';

export const getCountriesRequest = createAction('[Countries List] Get all countries');
export const getCountriesSuccess = createAction('[Countries List] Get all countries success', props<GetCountriesSuccess>())
export const filterCountries = createAction('[Countries List] filter countries list', props<FilterParams>());


interface FilterParams {
    name: string,
    region: string
}

interface GetCountriesSuccess {
    countries : CountryResponse[]
}