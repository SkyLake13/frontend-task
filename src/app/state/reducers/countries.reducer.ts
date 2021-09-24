import { createReducer, on } from "@ngrx/store";
import { CountryResponse } from "src/app/rest-countries";
import { filterCountries, getCountriesRequest, getCountriesSuccess, getCountry } from "../actions/countries.actions";

export interface CountriesState {
    countries: CountryResponse[],
    filter: FilterState,
    countryDetail?: CountryResponse,
}

export interface FilterState {
    name: string | null,
    region: string | null
}

const initialState: CountriesState = {
    countries: [],
    filter: {
        name: null,
        region: null
    },
    countryDetail: undefined
}

const _countriesReducer = createReducer(
    initialState,
    on(getCountriesRequest, (state) => {
        return { ... state }
    }),
    on(getCountriesSuccess, (state, { countries }) => {
        return { 
            ... state,
            countries: [...countries]
        }
    }),
    on(filterCountries, (state, payload) => {
        return { 
            ...state,
            filter: { 
                ...payload
            }
        }
    }),
    on(getCountry, (state, { code }) => {
        return {
            ...state,
            countryDetail: state.countries.find((country) => country.cca3 === code)
        }
    })
);

export const countriesReducer = (state: CountriesState | undefined, action: any) => _countriesReducer(state, action);