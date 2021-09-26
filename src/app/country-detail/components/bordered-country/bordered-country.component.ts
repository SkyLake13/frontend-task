import { Component, Input } from '@angular/core';
import { Store } from '@ngrx/store';

import { AppState, selectCountries } from '@state';
import { map } from 'rxjs/operators';
import { COUNTRY_ROUTE } from '../../../constants';

@Component({
  selector: 'app-bordered-country',
  templateUrl: './bordered-country.component.html',
  styleUrls: ['./bordered-country.component.scss']
})
export class BorderedCountryComponent {
  @Input()
  public countryCode!: string;

  public get country() {
    return this.store.select(selectCountries)
    .pipe(map((countries) => countries.find((c) => c.cca3 === this.countryCode)))
  }

  public readonly country_route = COUNTRY_ROUTE;

  constructor(private readonly store: Store<AppState>) { }
}
