import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CountryListContainerComponent } from './container.component';

describe('ListComponent', () => {
  let component: CountryListContainerComponent;
  let fixture: ComponentFixture<CountryListContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CountryListContainerComponent ]
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
