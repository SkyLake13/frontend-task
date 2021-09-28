import { createReducer, on } from "@ngrx/store";

import { CountryResponse } from "@rest-countries";

import { clearCountry, getCountryFailure, getCountrySuccess } from "../actions/country.actions";

export interface CountryState {
    countryDetail: CountryResponse | null,
    error: unknown
}

const initialState: CountryState = {
    countryDetail: null,
    error: null
}

const _countryReducer = createReducer(
    initialState,
    on(getCountrySuccess, (state, { country }) => {
        return {
            ...state,
            countryDetail: country || null
        }
    }),
    on(getCountryFailure, (state, { error }) => {
        return {
            ...state,
            error: error
        }
    }),
    on(clearCountry, (state) => {
        return {
            ...state,
            countryDetail: null
        }
    }),
);

export const countryReducer = (state: CountryState | undefined, action: any) => _countryReducer(state, action);