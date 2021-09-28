import { createAction, props } from "@ngrx/store";
import { CountryResponse } from "@rest-countries";

export const getCountry = createAction('[Country detail] Get country by code', props<{ code: string }>());
export const getCountrySuccess = createAction('[Country detail] Get country by code success', props<{ country: CountryResponse | undefined }>());
export const getCountryFailure = createAction('[Country detail] Get country by code failure', props<any>());
export const clearCountry = createAction('[Country detail] clear country');