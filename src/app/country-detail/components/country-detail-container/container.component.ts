import { ChangeDetectionStrategy, Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { filter, map } from 'rxjs/operators';

import { AppState, clearCountry, getCountry, 
  selectCountry, selectCountryError } from '@state';

import { CODE_PATH_PARAM } from '../../../constants';
import { Location } from '@angular/common';

@Component({
  selector: 'app-country-detail-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CountryDetailContainerComponent implements OnInit, OnDestroy {
  public get country$() {
    return this.store.select(selectCountry);
  }

  public get error$() {
    return this.store.select(selectCountryError);
  }

  public back() {
    this.location.back();
  }

  public ngOnInit(): void {
    this.dispatchGetCountry();
  }

  public ngOnDestroy() {
    this.dispatchClearCountry();
    this.subscription?.unsubscribe();
  }

  private dispatchGetCountry() {
    this.subscription = this.route.paramMap
      .pipe(
        filter((parmas) => parmas.has(CODE_PATH_PARAM)),
        map((params) => params.get(CODE_PATH_PARAM)),
      )
      .subscribe((code) => code !== null && this.store.dispatch(getCountry({ code })));
  }

  private dispatchClearCountry() {
    this.store.dispatch(clearCountry());
  }

  constructor(
    private readonly route: ActivatedRoute,
    private readonly store: Store<AppState>,
    private readonly location: Location
  ) { }

  private subscription?: Subscription;
}
