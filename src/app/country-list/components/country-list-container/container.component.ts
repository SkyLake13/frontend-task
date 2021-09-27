import { AfterViewInit, ChangeDetectionStrategy, 
  Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { debounceTime, map } from 'rxjs/operators';

import { CountryResponse } from '@rest-countries';
import { selectCountries, AppState, getCountries, 
  filterCountries, selectFilter, FilterParams } from '@state';

import { CountryListModel } from '../../country-list.model';
import { FilterComponent } from '../filter/filter.component';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-country-list-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CountryListContainerComponent implements OnInit, AfterViewInit, OnDestroy {
  public get filter$(): Observable<FilterParams> {
    return this.store.select(selectFilter);
  }

  public get regions$(): Observable<string[]> {
    return this.countries$.pipe(map((countries) => [...new Set(countries.map((c) => c.region).sort())]));
  }

  public get countryNames$(): Observable<string[]> {
    return this.countries$.pipe(map((countries) => countries.map((c) => c.name).sort()));
  }

  public ngOnInit() {
    this.dispatchGetCountries();
    this.subscribeToFilter();
    this.subscribeToCountries();
  }

  public ngAfterViewInit(): void {
    this.dispatchFilterChanges();
  }

  public ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  constructor(private readonly store: Store<AppState>) {
    this._dataSource = new MatTableDataSource();
    this._dataSource.filterPredicate = filter;
  }

  private dispatchGetCountries() {
    this.store.dispatch(getCountries());
  }

  private dispatchFilterChanges() {
    this.subscription.add(this._filter?.form.valueChanges
      .pipe(debounceTime(400))
      .subscribe((filter) => this.store.dispatch(filterCountries(filter))));
  }

  private subscribeToFilter() {
    this.subscription.add(this.filter$.subscribe((f) => this._dataSource.filter = JSON.stringify(f)));
  }

  private subscribeToCountries() {
    this.subscription.add(this.countries$.subscribe((countries) => this._dataSource.data = countries));
  }

  private get countries$(): Observable<CountryListModel[]> {
    return this.store.select(selectCountries)
      .pipe(map((countries) => countries.map(responseMapper)));
  }

  @ViewChild(FilterComponent)
  public _filter?: FilterComponent;

  public _dataSource: MatTableDataSource<CountryListModel>;

  private subscription = new Subscription();
}


const filter: (data: any, filter: string) => boolean = (country, filter) => {
  const parsedFilter = JSON.parse(filter);

  return country.name.toLowerCase().includes(parsedFilter.country.toLowerCase())
    && country.region.toLowerCase().includes(parsedFilter.region.toLowerCase());
};

const responseMapper = (country: CountryResponse): CountryListModel => {
  return {
    name: country.name.common,
    officialName: country.name.official || country.name.common,
    region: country.region,
    capital: country.capital,
    area: country.area,
    borders: country.borders,
    flag: country.flags[0],
    cca3: country.cca3
  }
}