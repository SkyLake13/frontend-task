import { createReducer, on } from "@ngrx/store";

import { CountryResponse } from "@rest-countries";

import { clearCountry, getCountriesSuccess, getCountry, getCountrySuccess } from "../actions/countries.actions";

export interface CountriesState {
    countries: CountryResponse[],
    countryDetail: CountryResponse | null,
}

const initialState: CountriesState = {
    countries: [],
    countryDetail: null
}

const _countriesReducer = createReducer(
    initialState,
    on(getCountriesSuccess, (state, { countries }) => {
        return {
            ...state,
            countries: [...countries]
        }
    }),
    on(getCountry, (state, { code }) => {
        return {
            ...state,
            countryDetail: state.countries
                .find((country) => country.cca3.toLowerCase() === code.toLowerCase()) || null
        }
    }),
    on(getCountrySuccess, (state, { country }) => {
        return {
            ...state,
            countryDetail: country
        }
    }),
    on(clearCountry, (state) => {
        return {
            ...state,
            countryDetail: null
        }
    }),
);

export const countriesReducer = (state: CountriesState | undefined, action: any) => _countriesReducer(state, action);