import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { CountryResponse } from '@rest-countries';
import { selectCountries, AppState, getCountries } from '@state';

import { CountryListModel } from '../../country-list.model';

@Component({
  selector: 'app-country-list-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CountryListContainerComponent implements OnInit {
  public get countries(): Observable<CountryListModel[]> {
    return this.store.select(state => selectCountries(state))
      .pipe(map((countries) => countries.map(responseMapper)))
  }

  public ngOnInit() {
    this.store.dispatch(getCountries());
  }

  constructor(private readonly store: Store<AppState>) { }
}

const responseMapper = (country: CountryResponse): CountryListModel => {
  return {
    name: country.name.common,
    officialName: country.name.official,
    region: country.region,
    capital: country.capital,
    area: country.area,
    borders: country.borders,
    flag: country.flags[0],
    cca3: country.cca3
  }
}