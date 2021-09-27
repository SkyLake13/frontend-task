import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { MatAutocompleteModule } from '@angular/material/autocomplete';

import { FilterComponent } from './filter.component';

describe('FilterComponent', () => {
  let component: FilterComponent;
  let fixture: ComponentFixture<FilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FilterComponent ],
      imports: [ReactiveFormsModule, MatAutocompleteModule],
      schemas: [NO_ERRORS_SCHEMA]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FilterComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render input', () => {
    component.filter = {
      region: 'asia',
      country: 'india'
    };

    fixture.detectChanges();

    const region = component.form.get('region');
    const country = component.form.get('country');

    expect(region).toBeTruthy();
    expect(region?.value).toEqual('asia');

    expect(country).toBeTruthy();
    expect(country?.value).toEqual('india');
  });

  it('should render input', (done) => {
    component.form.valueChanges.subscribe((form) => {
      expect(form).toBeTruthy();
      expect(form?.region).toEqual('europe');
      expect(form?.country).toEqual('germany');

      done();
    });

    component.form.patchValue({
      region: 'europe',
      country: 'germany'
    });

    fixture.detectChanges();
  });
});
