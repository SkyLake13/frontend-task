import { NO_ERRORS_SCHEMA } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { RouterTestingModule } from '@angular/router/testing';
import { provideMockStore, MockStore } from '@ngrx/store/testing';

import { AppComponent } from './app.component';

describe('AppComponent', () => {
  const initialState = {
    loader: {
      loading: false
    }
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      providers: [
        provideMockStore({ initialState: initialState }),
      ],
      declarations: [
        AppComponent
      ],
      schemas: [NO_ERRORS_SCHEMA]
    }).compileComponents();
  });

  it('should create the instance', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const component = fixture.componentInstance;
    expect(component).toBeTruthy();
  });

  it(`should does not show loading animation`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const element = fixture.debugElement;

    const loader = element.query(By.css('.overlay-container'));

    expect(loader).toBeFalsy();
  });

  it('should show loading animation', () => {
    const store = TestBed.inject(MockStore);
    const newState = {
      loader: {
        loading: true
      }
    };
    store.setState(newState);

    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    
    const element = fixture.debugElement;
    const loader = element.query(By.css('.overlay-container'));

    expect(loader).toBeTruthy();
  });
});
