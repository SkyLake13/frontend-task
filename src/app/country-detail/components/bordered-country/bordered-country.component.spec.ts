import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { RouterTestingModule } from '@angular/router/testing';
import { MockStore, provideMockStore } from '@ngrx/store/testing';

import { BorderedCountryComponent } from './bordered-country.component';

describe('BorderedCountryComponent', () => {
  const initialState = {
    countries: {
      countries: []
    }
  }
  
  let component: BorderedCountryComponent;
  let fixture: ComponentFixture<BorderedCountryComponent>;
  let mockStore: MockStore;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BorderedCountryComponent ],
      imports: [RouterTestingModule],
      providers: [
        provideMockStore({ initialState: initialState }),
      ],
      schemas: [NO_ERRORS_SCHEMA]
    })
    .compileComponents();
  });

  beforeEach(() => {
    mockStore = TestBed.inject(MockStore);
    fixture = TestBed.createComponent(BorderedCountryComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render according to input when state is not present', () => {
    component.countryCode = 'DEU';
    fixture.detectChanges();

    const anchor = fixture.debugElement.query(By.css('a'));
    expect(anchor.nativeElement).toBeDefined();
    expect(anchor.nativeElement.href).toContain('/country/DEU');
    expect(anchor.nativeElement.textContent).toContain('DEU');
  });

  it('should render according to input when state is present', () => {
    mockStore.setState({
      countries: {
        countries: [{
          cca3: 'DEU',
          name: {
            common: 'Germany'
          },
          flags: ['https://restcountries.com/data/dji.svg']
        }]
      }
    });

    component.countryCode = 'DEU';
    fixture.detectChanges();

    const anchor = fixture.debugElement.query(By.css('a'));
    expect(anchor.nativeElement).toBeDefined();
    expect(anchor.nativeElement.href).toContain('/country/DEU');
    expect(anchor.nativeElement.textContent).toContain('Germany');

    const flag = fixture.debugElement.query(By.css('img'));
    expect(flag.nativeElement).toBeDefined();
    expect(flag.nativeElement.src).toEqual('https://restcountries.com/data/dji.svg');
  });
});
