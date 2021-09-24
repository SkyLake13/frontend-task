import { Action, createReducer, on } from "@ngrx/store";
import { CountryResponse } from "src/app/rest-countries";
import { filterCountries, getCountriesRequest, getCountriesSuccess } from "../actions/countries.actions";

export interface CountriesState {
    countries: CountryResponse[],
    filter: FilterState
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
    }
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
    })
);

export const countriesReducer = (state: CountriesState | undefined, action: any) => _countriesReducer(state, action);