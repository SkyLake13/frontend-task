import { Inject, Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { Store } from "@ngrx/store";
import { filter, map, switchMap, tap, withLatestFrom } from "rxjs/operators";

import { APIClient, API_CLIENT } from "@rest-countries";

import {
    getCountries, getCountriesSuccess,
    getCountry, getCountrySuccess, startLoader, stopLoader
} from "../actions";
import { AppState } from "../app.state";
import { selectCountriesState } from "../selectors";

@Injectable()
export class CountriesEffects {
    constructor(
        private readonly actions$: Actions,
        private readonly store: Store<AppState>,
        @Inject(API_CLIENT)
        private readonly clientService: APIClient
    ) { }

    private fetchCountries$ = createEffect(() => this.actions$
        .pipe(
            ofType(getCountries),
            withLatestFrom(this.store.select(selectCountriesState)),
            filter(([, countriesState]) => countriesState.countries.length === 0),
            tap(() => this.store.dispatch(startLoader())),
            switchMap(() => this.clientService.getAllCountries()
                .pipe(
                    map((countries) => getCountriesSuccess({ countries })),
                    tap(() => this.store.dispatch(stopLoader()))
                )
            )
        )
    );
    private fetchCountry$ = createEffect(() => this.actions$
        .pipe(
            ofType(getCountry),
            withLatestFrom(this.store.select(selectCountriesState)),
            filter(([, countriesState]) => countriesState.countries.length === 0),
            tap(() => this.store.dispatch(startLoader())),
            switchMap(([action]) => this.clientService.getCountryByCode(action.code)
                .pipe(
                    map((country) => getCountrySuccess({ country })),
                    tap(() => this.store.dispatch(stopLoader()))
                )
            )
        )
    );
}