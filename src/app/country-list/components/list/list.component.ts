import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ListService } from '../../service/list.service';

@Component({
  selector: 'app-countires',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ListComponent {
  public countries = new MatTableDataSource();

  constructor(private readonly service: ListService) { }

  public ngOnInit() {
    this.service.getCountries()
      .subscribe((countries) => {
        this.countries.data = countries
      });
  }
}
