import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CountryListPresentationComponent } from './presentation.component';

describe('TableComponent', () => {
  let component: CountryListPresentationComponent;
  let fixture: ComponentFixture<CountryListPresentationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CountryListPresentationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CountryListPresentationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
