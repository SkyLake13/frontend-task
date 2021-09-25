import { ChangeDetectionStrategy, Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { filter, map } from 'rxjs/operators';

import { AppState, getCountry } from '../../../state';

@Component({
  selector: 'app-country-detail-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CountryDetailContainerComponent implements OnInit, OnDestroy {
  public get country() {
    return this.store.select(state => state.countries.countryDetail);
  }

  public ngOnInit(): void {
    this.dispatchGetCountry();
  }

  public ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  private dispatchGetCountry() {
    this.subscription = this.route.paramMap
      .pipe(
        filter((parmas) => parmas.has('code')),
        map((params) => params.get('code'))
      )
      .subscribe((code) => code !== null && this.store.dispatch(getCountry({ code })));
  }

  constructor(
    private readonly route: ActivatedRoute,
    private readonly store: Store<AppState>
  ) { }

  private subscription!: Subscription;
}
