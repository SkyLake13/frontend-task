import { AfterViewInit, ChangeDetectionStrategy, 
  Component, Input, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-country-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TableComponent implements AfterViewInit {
  @Input()
  public dataSource!: MatTableDataSource<any>;

  @ViewChild(MatSort)
  public sort!: MatSort;

  public ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
  }


  public _columns = ['flag', 'name', 'capital', 'area', 'region', 'borders'];
}
