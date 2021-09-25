import { AfterViewInit, ChangeDetectionStrategy, 
  Component, Input, OnDestroy, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Subscription } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

import { CountryListModel } from '../../country-list.model';
import { FilterComponent } from '../filter/filter.component';

@Component({
  selector: 'app-country-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TableComponent implements AfterViewInit, OnDestroy {
  @Input()
  public set data(countries: CountryListModel[] | null) {
    if(countries) {
      this._dataSource.data = countries;
    }
  }

  public ngAfterViewInit(): void {
    this.setSorter();
    this.subscribeToFilter();
  }

  private setSorter() {
    this._dataSource.sort = this._sort;
  }

  private subscribeToFilter() {
    this.subscription = this._filter.form.valueChanges
      .pipe(debounceTime(400))
      .subscribe((filter) => this._dataSource.filter = JSON.stringify(filter));
  }

  public ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  constructor() {
    this._dataSource.filterPredicate = filter;
  }

  @ViewChild(FilterComponent)
  public _filter!: FilterComponent;
  
  @ViewChild(MatSort)
  public _sort!: MatSort;

  public _dataSource = new MatTableDataSource<CountryListModel>();
  public _displayColumns = ['flag', 'name', 'capital', 'area', 'region', 'borders'];

  private subscription!: Subscription;
}


const filter: (data: any, filter: string) => boolean = (country, filter) => {
  const parsedFilter = JSON.parse(filter);

  return country.name.toLowerCase().includes(parsedFilter.country.toLowerCase())
    && country.region.toLowerCase().includes(parsedFilter.region.toLowerCase());
};
