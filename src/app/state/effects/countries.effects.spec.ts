import { TestBed } from '@angular/core/testing';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { API_CLIENT } from '@rest-countries/injection-tokens';
import { CountriesEffects } from './countries.effects';
import { Observable, of, Subscription } from 'rxjs';
import { AppState } from '@state/app.state';
import { getCountries, getCountriesSuccess, getCountry, getCountrySuccess } from '../actions';

describe('CountriesEffects', () => {
    let apiService = jasmine.createSpyObj('apiService', [
        'getAllCountries$', 'getCountryByCode$'
    ]);

    let initialState: AppState = {
        countryList: {
            countries: [],
            error: null
        },
        country: {
            countryDetail: null,
            error: null
        },
        filter: {
            country: '',
            region: ''
        },
        loader: {
            loading: false
        }
    };

    let actions: Observable<any>;
    let store: MockStore<AppState>;
    let effects: CountriesEffects;
    let subscription: Subscription;

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [
                CountriesEffects,
                {
                    provide: API_CLIENT,
                    useValue: apiService
                },
                provideMockStore({ initialState }),
                provideMockActions(() => actions)
            ]
        });
    });

    beforeEach(() => {
        effects = TestBed.inject(CountriesEffects);
        store = TestBed.inject(MockStore);
    });

    afterEach(() => {
        subscription?.unsubscribe();
        store.refreshState();
    });

    it('should initialize', () => {
        expect(effects).toBeTruthy();
    });

    it('should Get Countries from state', (done) => {
        const countries = [
            {
                cca3: 'DEU',
                name: {
                  common: 'Germany'
                },
                capital: ['Berlin'],
                region: 'europe',
                subregion: '',
                borders: [],
                area: 8798,
                flags: []
            }
        ];

        store.setState({
            ...initialState,
            countryList: {
                error: null,
                countries
            }
        });

        const expectedAction = getCountriesSuccess({ countries });
        actions = of(getCountries);
        subscription = effects.fetchCountries$.subscribe((action) => {
           expect(action).toEqual(expectedAction);

            done();
        });

        
    });

    it('should Get Countries from API Client service', (done) => {
        const countries = [
            {
                cca3: 'DEU',
                name: {
                  common: 'Germany'
                },
                capital: ['Berlin'],
                region: 'europe',
                subregion: '',
                borders: [],
                area: 8798,
                flags: []
            }
        ];

        const expectedAction = getCountriesSuccess({ countries });

        apiService.getAllCountries$.and.returnValue(of([...countries]));
        actions = of(getCountries);

        subscription = effects.fetchCountries$.subscribe((action) => {
           expect(action).toEqual(expectedAction);

            done();
        });
    });

    it('should Get Country from state', (done) => {
        const countries = [
            {
                cca3: 'DEU',
                name: {
                  common: 'Germany'
                },
                capital: ['Berlin'],
                region: 'europe',
                subregion: '',
                borders: [],
                area: 8798,
                flags: []
            }
        ];

        store.setState({
            ...initialState,
            countryList: {
                error: null,
                countries
            }
        });

        const expectedAction = getCountrySuccess({ country: countries[0] });
        actions = of(getCountry({ code: 'DEU' }));
        subscription = effects.fetchCountry$.subscribe((action) => {
           expect(action).toEqual(expectedAction);

            done();
        });

        
    });

    it('should Get Country from API Client service', (done) => {
        const country = {
                cca3: 'DEU',
                name: {
                  common: 'Germany'
                },
                capital: ['Berlin'],
                region: 'europe',
                subregion: '',
                borders: [],
                area: 8798,
                flags: []
        };

        const expectedAction = getCountrySuccess({ country });

        apiService.getCountryByCode$.and.returnValue(of(country));
        actions = of(getCountry({ code: 'DEU' }));

        subscription = effects.fetchCountry$.subscribe((action) => {
           expect(action).toEqual(expectedAction);

            done();
        });
    });
});
