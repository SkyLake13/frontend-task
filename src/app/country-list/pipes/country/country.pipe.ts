import { Pipe, PipeTransform } from '@angular/core';
import { Store } from '@ngrx/store';

import { CountryResponse } from '@rest-countries';
import { AppState, selectCountries } from '@state';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';

@Pipe({
  name: 'country'
})
export class CountryPipe implements PipeTransform {
  public transform(countryCode: string): Observable<CountryResponse | undefined> {
    return this.countries.pipe(map((countries) => countries
                    .find((c) => c.cca3.toLowerCase() === countryCode.toLowerCase())))
  }

  private get countries(): Observable<CountryResponse[]> {
    return this.store.select(selectCountries);
  }

  constructor(private readonly store: Store<AppState>) { }

}
