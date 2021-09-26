import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BorderedCountryComponent } from './bordered-country.component';

describe('BorderedCountryComponent', () => {
  let component: BorderedCountryComponent;
  let fixture: ComponentFixture<BorderedCountryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BorderedCountryComponent ]
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
