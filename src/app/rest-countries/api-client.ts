import { Observable } from "rxjs";
import { CountryResponse } from "./response-models/country.response";

export interface APIClient {
    getAllCountries(): Observable<CountryResponse[]>;
    searchByCodes(codes: string[]): Observable<CountryResponse[]>
}