import { FilterState } from ".";
import { CountriesState } from "./reducers/countries.reducer";

export interface AppState {
    countries: CountriesState,
    filter: FilterState
}