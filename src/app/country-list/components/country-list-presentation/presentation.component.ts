import { AfterViewInit, ChangeDetectionStrategy, 
  Component, Input, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { COUNTRY_ROUTE } from 'src/app/constants';

import { CountryListModel } from '../../country-list.model';

@Component({
  selector: 'app-country-list-presentation',
  templateUrl: './presentation.component.html',
  styleUrls: ['./presentation.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CountryListPresentationComponent implements AfterViewInit {  
  @Input()
  public dataSource!: MatTableDataSource<CountryListModel>;

  public ngAfterViewInit(): void {
    this.setSorter();
  }

  private setSorter() {
    this.dataSource.sort = this._sort;
    this.dataSource.paginator = this._paginator;
  }
  
  @ViewChild(MatSort)
  public _sort!: MatSort;

  @ViewChild(MatPaginator)
  public _paginator!: MatPaginator;

  public _displayColumns = ['flag', 'name', 'capital', 'area', 'region', 'borders'];
  public country_route = COUNTRY_ROUTE;
}
