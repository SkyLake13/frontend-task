import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { CountryDetailPresentationComponent } from './presentation.component';

describe('CountryDetailPresentationComponent', () => {
  let component: CountryDetailPresentationComponent;
  let fixture: ComponentFixture<CountryDetailPresentationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CountryDetailPresentationComponent ],
      schemas: [NO_ERRORS_SCHEMA]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CountryDetailPresentationComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render input', () => {
    component.country = {
      cca3: 'DEU',
      name: {
        common: 'Germany'
      },
      flags: ['https://restcountries.com/data/dji.svg'],
      borders: ['FRA', 'SWE']
    };

    fixture.detectChanges();

    const borders = fixture.debugElement.queryAll(By.css('app-bordered-country'));
    expect(borders).toBeDefined();
    expect(borders.length).toEqual(2);
  });
});
