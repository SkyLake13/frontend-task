import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Store } from '@ngrx/store';
import { map } from 'rxjs/operators';

import { CountryResponse } from '../../../rest-countries';
import { selectCountries, AppState, getCountriesRequest } from '../../../state';

import { CountryListModel } from '../../country-list.model';


@Component({
  selector: 'app-countires',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ListComponent {
  public countries = new MatTableDataSource();

  constructor(private readonly store: Store<AppState>) { }

  public ngOnInit() {
   this.store.select(state => selectCountries(state))
    .pipe(map((countries) => countries.map(responseMapper)))
    .subscribe((c) => this.countries.data = c);

    this.store.dispatch(getCountriesRequest());
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