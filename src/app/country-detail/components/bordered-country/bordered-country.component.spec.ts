import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideMockStore } from '@ngrx/store/testing';

import { BorderedCountryComponent } from './bordered-country.component';

describe('BorderedCountryComponent', () => {
  const initialState = {
    countries: {
      countries: [
        {
          cca3: 'DEU',
          name: {
            common: 'Germany'
          }
        }
      ]
    }
  }
  
  let component: BorderedCountryComponent;
  let fixture: ComponentFixture<BorderedCountryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BorderedCountryComponent ],
      providers: [
        provideMockStore({ initialState: initialState }),
      ],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BorderedCountryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
