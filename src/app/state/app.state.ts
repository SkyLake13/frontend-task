import { FilterState, LoadingState } from ".";
import { CountriesState } from "./reducers/countries.reducer";

export interface AppState {
    countries: CountriesState,
    filter: FilterState,
    loader: LoadingState
}