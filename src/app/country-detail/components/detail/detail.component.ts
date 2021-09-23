import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { filter, map, switchMap, takeWhile } from 'rxjs/operators';
import { DetailService } from '../../service/detail.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DetailComponent implements OnInit {
  public country: any;
  constructor(
    private readonly service: DetailService,
    private readonly route: ActivatedRoute,
    private readonly cdr: ChangeDetectorRef) { }

  public ngOnInit(): void {
    this.route.paramMap
      .pipe(
        takeWhile((parmas) => parmas.has('code')),
        map((params) => params.get('code')),
        switchMap((code) => this.service.getCountry(code || ''))
      )
      .subscribe((country) => {
        console.log(country)
        this.country = country[0];
        this.cdr.markForCheck();
      });
  }
}
