import { createReducer, on } from "@ngrx/store";

import { CountryResponse } from "@rest-countries";

import { getCountriesSuccess } from "../actions/countries.actions";

export interface CountriesState {
    countries: CountryResponse[]
}

const initialState: CountriesState = {
    countries: []
}

const _countriesReducer = createReducer(
    initialState,
    on(getCountriesSuccess, (state, { countries }) => {
        return {
            ...state,
            countries: [...countries]
        }
    })
);

export const countriesReducer = (state: CountriesState | undefined, action: any) => _countriesReducer(state, action);