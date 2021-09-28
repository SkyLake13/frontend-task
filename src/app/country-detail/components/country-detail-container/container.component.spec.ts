import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { ActivatedRoute, convertToParamMap } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { EffectsModule } from '@ngrx/effects';
import { Store, StoreModule } from '@ngrx/store';
import { API_CLIENT } from '@rest-countries';
import { CountriesEffects, countryReducer, getCountriesSuccess } from '@state';
import { of } from 'rxjs';
import { CODE_PATH_PARAM } from 'src/app/constants';

import { CountryDetailContainerComponent } from './container.component';

describe('CountryDetailContainerComponent', () => {
  let apiService = jasmine.createSpyObj('apiService', [
    'getAllCountries$', 'getCountryByCode$'
  ]);

  const fakeActivatedRoute = {
    paramMap: of(convertToParamMap({
      [CODE_PATH_PARAM]: 'DEU'
    }))
  }

  let component: CountryDetailContainerComponent;
  let fixture: ComponentFixture<CountryDetailContainerComponent>;
  let route: ActivatedRoute;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        StoreModule.forRoot({
          country: countryReducer
        }),
        EffectsModule.forRoot([
            CountriesEffects
        ])
      ],
      declarations: [ CountryDetailContainerComponent ],
      schemas: [NO_ERRORS_SCHEMA],
      providers: [
        {
          provide: API_CLIENT,
          useValue: apiService
        },
        {
          provide: ActivatedRoute,
          useValue: fakeActivatedRoute
        }
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    route = TestBed.inject(ActivatedRoute);
    fixture = TestBed.createComponent(CountryDetailContainerComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should fetch country using effects', () => {
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

    apiService.getCountryByCode$.and.returnValue(of(country));

    fixture.detectChanges();

    const presentationComponent = fixture.debugElement.query(By.css('app-country-detail-presentation'));
    expect(presentationComponent).toBeDefined();
  });

  it('should get country using reducer', () => {
    const store = TestBed.inject(Store);
    store.dispatch(getCountriesSuccess({
      countries: [{
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
      }]
    }));

    fixture.detectChanges();

    const presentationComponent = fixture.debugElement.query(By.css('app-country-detail-presentation'));
    expect(presentationComponent).toBeDefined();
  });
});
