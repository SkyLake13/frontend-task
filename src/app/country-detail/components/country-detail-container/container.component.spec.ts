import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CountryDetailContainerComponent } from './container.component';

describe('DetailComponent', () => {
  let component: CountryDetailContainerComponent;
  let fixture: ComponentFixture<CountryDetailContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CountryDetailContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CountryDetailContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
