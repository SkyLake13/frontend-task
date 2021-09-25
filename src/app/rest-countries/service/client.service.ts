import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { API_BASE_URL } from '../injection-tokens';
import { APIClient } from '../api-client';
import { CountryResponse } from '../response-models/country.response';


const ALL = 'all';
const BY_CODE = 'alpha';

@Injectable()
export class ClientService implements APIClient {
  constructor(
    private readonly httpClient: HttpClient,
    @Inject(API_BASE_URL)
    private readonly apiBaseUrl: string
  ) { }

  public getAllCountries(): Observable<CountryResponse[]> {
    const url = `${this.apiBaseUrl}/${ALL}`;

    return this.httpClient.get<CountryResponse[]>(url);
  }

  public getCountryByCode(code: string): Observable<CountryResponse> {
    const url = `${this.apiBaseUrl}/${BY_CODE}/${code}`;

    return this.httpClient.get<CountryResponse[]>(url)
            .pipe(map(([country]) => country));
  }
}
