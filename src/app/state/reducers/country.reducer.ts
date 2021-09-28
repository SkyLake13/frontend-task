import { createReducer, on } from "@ngrx/store";

import { CountryResponse } from "@rest-countries";

import { clearCountry, getCountrySuccess } from "../actions/country.actions";

export interface CountryState {
    countryDetail: CountryResponse | null,
}

const initialState: CountryState = {
    countryDetail: null
}

const _countryReducer = createReducer(
    initialState,
    on(getCountrySuccess, (state, { country }) => {
        return {
            ...state,
            countryDetail: country || null
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