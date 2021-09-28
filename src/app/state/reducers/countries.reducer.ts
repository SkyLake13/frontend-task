import { createReducer, on } from "@ngrx/store";

import { CountryResponse } from "@rest-countries";

import { getCountriesFailure, getCountriesSuccess } from "../actions/countries.actions";

export interface CountriesState {
    countries: CountryResponse[],
    error: unknown
}

const initialState: CountriesState = {
    countries: [],
    error: null
}

const _countriesReducer = createReducer(
    initialState,
    on(getCountriesSuccess, (state, { countries }) => {
        return {
            ...state,
            countries: [...countries]
        }
    }),
    on(getCountriesFailure, (state, { error }) => {
        return {
            ...state,
            error: error
        }
    })
);

export const countriesReducer = (state: CountriesState | undefined, action: any) => _countriesReducer(state, action);