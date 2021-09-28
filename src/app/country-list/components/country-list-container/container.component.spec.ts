import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { API_CLIENT } from '@rest-countries';
import { CountriesEffects, countriesReducer, filterReducer } from '@state';
import { of } from 'rxjs';

import { CountryListContainerComponent } from './container.component';

describe('CountryListContainer', () => {
  let apiService = jasmine.createSpyObj('apiService', [
    'getAllCountries$', 'getCountryByCode$'
  ]);
  
  const initialState = {
    countryList: {
      countries: [
        {
          cca3: 'DEU',
          name: {
            common: 'Germany',
            official: 'Germany'
          },
          region: '',
          subregion: '',
          capital: [''],
          area: 89780,
          borders: [''],
          flags: ['']
        },
        {
          cca3: 'IND',
          name: {
            common: 'India',
            official: 'India'
          },
          region: '',
          subregion: '',
          capital: [''],
          area: 89780,
          borders: [''],
          flags: ['']
        }
      ]
    }
  }

  let component: CountryListContainerComponent;
  let fixture: ComponentFixture<CountryListContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        StoreModule.forRoot({
          countryList: countriesReducer,
          filter: filterReducer
        }),
        EffectsModule.forRoot([
            CountriesEffects
        ])
      ],
      declarations: [ CountryListContainerComponent ],
      providers: [
        {
          provide: API_CLIENT,
          useValue: apiService
        },
      ],
      schemas: [NO_ERRORS_SCHEMA]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CountryListContainerComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render countries', () => {
    apiService.getAllCountries$.and.returnValue(of(initialState.countryList.countries));
    
    fixture.detectChanges();

    expect(component._dataSource.data).toBeDefined();
    expect(component._dataSource.data.length).toEqual(2);
  });
});

