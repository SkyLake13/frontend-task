import { ChangeDetectionStrategy, ChangeDetectorRef, 
  Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { filter, map } from 'rxjs/operators';
import { AppState, getCountry } from '../../../state';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DetailComponent implements OnInit {
  public country: any;
  constructor(
    private readonly route: ActivatedRoute,
    private readonly cdr: ChangeDetectorRef,
    private readonly store: Store<AppState>) { }

  public ngOnInit(): void {

    this.store.select(state => state.countries.countryDetail)
      .subscribe((country) => { 
        this.country = country;
        this.cdr.markForCheck();
      });

    this.route.paramMap
      .pipe(
        filter((parmas) => parmas.has('code')),
        map((params) => params.get('code'))
      )
      .subscribe((code) => code !== null && this.store.dispatch(getCountry({ code })));
  }
}
