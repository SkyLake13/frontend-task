import { Observable } from "rxjs";
import { CountryResponse } from "./response-models/country.response";

export interface APIClient {
    getAllCountries$(): Observable<CountryResponse[]>;
    getCountryByCode$(code: string): Observable<CountryResponse>
}