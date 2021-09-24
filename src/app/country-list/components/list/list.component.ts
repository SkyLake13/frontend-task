import { AfterViewInit, ChangeDetectionStrategy, Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Store } from '@ngrx/store';
import { debounceTime, map } from 'rxjs/operators';

import { CountryResponse } from '../../../rest-countries';
import { selectCountries, AppState, getCountries } from '../../../state';

import { CountryListModel } from '../../country-list.model';
import { FilterComponent } from '../filter/filter.component';


@Component({
  selector: 'app-countires',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ListComponent implements OnInit, AfterViewInit {
  public countries = new MatTableDataSource<CountryListModel>();

  public ngOnInit() {
   this.store.select(state => selectCountries(state))
    .pipe(map((countries) => countries.map(responseMapper)))
    .subscribe((c) => this.countries.data = c);

    this.store.dispatch(getCountries());
  }

  public ngAfterViewInit(): void {
    this._filter.form.valueChanges
          .pipe(debounceTime(400))
          .subscribe((filter) => {
            console.log(filter);
            this.countries.filter = JSON.stringify(filter);
          });
  }

  constructor(private readonly store: Store<AppState>) {
    this.countries.filterPredicate = (country, filter) => {
      const parsedFilter = JSON.parse(filter);
      
      return country.name.toLowerCase().includes(parsedFilter.country.toLowerCase()) 
              && country.region.toLowerCase().includes(parsedFilter.region.toLowerCase());
    }
  }

  @ViewChild(FilterComponent)
  public _filter!: FilterComponent;
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