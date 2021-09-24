import { Inject, Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { map, switchMap } from "rxjs/operators";

import { APIClient, API_CLIENT } from "../../rest-countries";
import { getCountriesRequest, getCountriesSuccess } from "../actions/countries.actions";

@Injectable()
export class CountriesEffects {
    constructor(
        private readonly actions$: Actions,
        @Inject(API_CLIENT)
        private readonly clientService: APIClient
    ) { }

    public fetchCountries$ = createEffect(() => this.actions$
                                                .pipe(
                                                    ofType(getCountriesRequest),
                                                    switchMap(() => this.clientService.getAllCountries()
                                                                .pipe(
                                                                    map((countries) => getCountriesSuccess({ countries }))
                                                                )
                                                        )
                                                )
                                        );        
}