import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { provideMockStore } from '@ngrx/store/testing';

import { CountryDetailContainerComponent } from './container.component';

describe('CountryDetailContainerComponent', () => {
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
  let component: CountryDetailContainerComponent;
  let fixture: ComponentFixture<CountryDetailContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [ CountryDetailContainerComponent ],
      providers: [
        provideMockStore({ initialState: initialState }),
      ],
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
