import { Inject, Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { Store } from "@ngrx/store";
import { catchError, filter, map, switchMap, tap, withLatestFrom } from "rxjs/operators";

import { APIClient, API_CLIENT } from "@rest-countries";

import {
    getCountries, getCountriesFailure, getCountriesSuccess,
    getCountry, getCountryFailure, getCountrySuccess, startLoader, stopLoader
} from "../actions";
import { AppState } from "../app.state";
import { selectCountriesState } from "../selectors";
import { of } from "rxjs";
import { CountriesState } from "@state/reducers";

@Injectable()
export class CountriesEffects {
    constructor(
        private readonly actions$: Actions,
        private readonly store: Store<AppState>,
        @Inject(API_CLIENT)
        private readonly clientService: APIClient
    ) { }

    public fetchCountries$ = createEffect(() => this.actions$
        .pipe(
            ofType(getCountries),
            withLatestFrom(this.store.select(selectCountriesState)),
            filter(([, countriesState]) => countriesState.countries.length === 0),
            tap(() => this.store.dispatch(startLoader())),
            switchMap(() => this.clientService.getAllCountries$()
                .pipe(
                    map((countries) => getCountriesSuccess({ countries })),
                    tap(() => this.store.dispatch(stopLoader())),
                    catchError((err) => {
                        this.store.dispatch(stopLoader());
                        return of(getCountriesFailure(err));
                    })
                )
            )
        )
    );
    public fetchCountry$ = createEffect(() => this.actions$
        .pipe(
            ofType(getCountry),
            tap(() => this.store.dispatch(startLoader())),
            withLatestFrom(this.store.select(selectCountriesState)),
            switchMap(([action, state]) => {
                const country = getCountryFromState(state, action.code);
                if (country) {
                    this.store.dispatch(stopLoader());
                    return of(getCountrySuccess({ country }))
                } else {
                    return this.clientService.getCountryByCode$(action.code)
                        .pipe(
                            map((country) => getCountrySuccess({ country })),
                            tap(() => this.store.dispatch(stopLoader())),
                            catchError((err) => {
                                this.store.dispatch(stopLoader());
                                return of(getCountryFailure(err));
                            })
                        )
                }
            })
        )
    );
}

function getCountryFromState(state: CountriesState, code: string) {
    return state.countries.length !== 0 ? state.countries
                .find((c) => c.cca3.toLowerCase() === code.toLowerCase())
        : null;
}
