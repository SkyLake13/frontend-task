import { CountryState, FilterState, LoadingState } from ".";
import { CountriesState } from "./reducers/countries.reducer";

export interface AppState {
    countryList: CountriesState,
    country: CountryState,
    filter: FilterState,
    loader: LoadingState
}