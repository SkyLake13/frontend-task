import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CountryDetailPresentationComponent } from './country-detail-presentation.component';

describe('CountryDetailPresentationComponent', () => {
  let component: CountryDetailPresentationComponent;
  let fixture: ComponentFixture<CountryDetailPresentationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CountryDetailPresentationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CountryDetailPresentationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
