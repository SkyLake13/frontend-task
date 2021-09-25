import { AfterViewInit, ChangeDetectionStrategy, Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, Subscription, timer } from 'rxjs';
import { debounce, debounceTime, map, tap } from 'rxjs/operators';

import { CountryResponse } from '@rest-countries';
import { selectCountries, AppState, getCountries, filterCountries, selectFilter, FilterParams } from '@state';

import { CountryListModel } from '../../country-list.model';
import { FilterComponent } from '../filter/filter.component';

@Component({
  selector: 'app-country-list-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CountryListContainerComponent implements OnInit, AfterViewInit, OnDestroy {

  public get countries(): Observable<CountryListModel[]> {
    return this.store.select(selectCountries)
      .pipe(map((countries) => countries.map(responseMapper)))
      .pipe(tap((f) => console.log(f)));
  }

  public get filter(): Observable<FilterParams> {
    return this.store.select(selectFilter)
    .pipe(tap((f) => console.log(f)));
  }

  public ngOnInit() {
    this.store.dispatch(getCountries());
  }

  public ngAfterViewInit(): void {
    this.dispatchFilterChanges();
  }

  public ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }

  constructor(private readonly store: Store<AppState>) { }

  private dispatchFilterChanges() {
    this.subscription = this._filter.form.valueChanges
      .pipe(debounce(() => timer(400)))
      .subscribe((filter) => this.store.dispatch(filterCountries(filter)));
  }

  @ViewChild(FilterComponent)
  public _filter!: FilterComponent;

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