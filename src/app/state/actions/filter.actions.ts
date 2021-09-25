import { createAction, props } from "@ngrx/store";


export interface FilterParams {
    country: string,
    region: string
}

export const filterCountries = createAction('[Countries List] filter countries list', props<FilterParams>());