import { AfterViewInit, ChangeDetectionStrategy, 
  Component, Input, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

import { FilterParams } from '@state';

import { CountryListModel } from '../../country-list.model';

@Component({
  selector: 'app-country-list-presentation',
  templateUrl: './presentation.component.html',
  styleUrls: ['./presentation.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CountryListPresentationComponent implements AfterViewInit {
  @Input()
  public set filter(value: FilterParams) {
    this._dataSource.filter = JSON.stringify(value);
  }
  
  @Input()
  public set data(countries: CountryListModel[] | null) {
    if(countries) {
      this._dataSource.data = countries;
    }
  }

  public ngAfterViewInit(): void {
    this.setSorter();
  }

  private setSorter() {
    this._dataSource.sort = this._sort;
  }

  constructor() {
    this._dataSource.filterPredicate = filter;
  }
  
  @ViewChild(MatSort)
  public _sort!: MatSort;

  public _dataSource = new MatTableDataSource<CountryListModel>();
  public _displayColumns = ['flag', 'name', 'capital', 'area', 'region', 'borders'];
}


const filter: (data: any, filter: string) => boolean = (country, filter) => {
  const parsedFilter = JSON.parse(filter);

  return country.name.toLowerCase().includes(parsedFilter.country.toLowerCase())
    && country.region.toLowerCase().includes(parsedFilter.region.toLowerCase());
};
