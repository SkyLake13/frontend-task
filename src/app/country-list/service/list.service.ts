import { Inject, Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { CountryResponse } from '../../rest-countries';
import { APIClient, API_CLIENT } from '../../rest-countries';
import { CountryListModel } from './country-list.model';

@Injectable()
export class ListService {
  constructor(
    @Inject(API_CLIENT)
    private readonly clientService: APIClient
  ) { }

  public getCountries() {
    return this.clientService.getAllCountries()
      .pipe(map((countries) => countries.map(responseMapper)));
  }
}


const responseMapper = (country: CountryResponse): CountryListModel => {
  return {
    name: country.name.common,
    officialName: country.name.official,
    region: country.region,
    capital: country.capital,
    area: country.area,
    borders: country.borders,
    flag: country.flags[0]
  }
}