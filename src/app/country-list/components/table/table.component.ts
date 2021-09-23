import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-country-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TableComponent {
  @Input()
  public dataSource!: MatTableDataSource<any>;

  public _columns = ['flag', 'name', 'capital', 'area', 'region', 'borders'];
}
