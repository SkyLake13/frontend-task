import { ChangeDetectionStrategy, Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { map } from 'rxjs/operators';

import { CountryResponse } from '../../../rest-countries';
import { selectCountries, AppState, getCountries } from '../../../state';

import { CountryListModel } from '../../country-list.model';

@Component({
  selector: 'app-countires',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ListComponent implements OnInit, OnDestroy {
  public countries: CountryListModel[] = [];

  public ngOnInit() {
    this.subscribeToState();
    this.store.dispatch(getCountries());
  }

  private subscribeToState() {
    this.subscription = this.store.select(state => selectCountries(state))
      .pipe(map((countries) => countries.map(responseMapper)))
      .subscribe((c) => this.countries = c);
  }

  public ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  constructor(private readonly store: Store<AppState>) { }

  private subscription!: Subscription;
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