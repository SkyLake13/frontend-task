import { Inject, Injectable } from '@angular/core';
import { APIClient, API_CLIENT } from '../../rest-countries';

@Injectable()
export class DetailService {
  constructor(
    @Inject(API_CLIENT)
    private readonly clientService: APIClient
  ) { }

  public getCountry(countryCode: string) {
    return this.clientService.searchByCodes([countryCode]);
  }
}
