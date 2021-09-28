import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { provideMockStore } from '@ngrx/store/testing';

import { CountryListContainerComponent } from './container.component';

describe('CountryListContainer', () => {
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
        }
      ]
    }
  }

  let component: CountryListContainerComponent;
  let fixture: ComponentFixture<CountryListContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReactiveFormsModule],
      declarations: [ CountryListContainerComponent ],
      providers: [
        provideMockStore({ initialState: initialState }),
      ],
      schemas: [NO_ERRORS_SCHEMA]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CountryListContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
