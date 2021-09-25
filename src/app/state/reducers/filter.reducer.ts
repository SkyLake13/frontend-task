import { createReducer, on } from "@ngrx/store";

import { filterCountries } from "../actions";

export interface FilterState {
    country: string,
    region: string,
}

const initialState: FilterState = {
    country: '',
    region: ''
}

const _filterReducer = createReducer(
    initialState,
    on(filterCountries, (state, payload) => {
        return {
            ...state,
            ...payload
        }
    })
);

export const filterReducer = (state: FilterState | undefined, action: any) => _filterReducer(state, action);