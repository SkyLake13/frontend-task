import { AfterViewInit, ChangeDetectionStrategy, 
  Component, Input, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

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
  }
  
  @ViewChild(MatSort)
  public _sort!: MatSort;

  public _displayColumns = ['flag', 'name', 'capital', 'area', 'region', 'borders'];
}
