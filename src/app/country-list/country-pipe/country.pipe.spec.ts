import { TestBed } from '@angular/core/testing';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { CountryPipe } from './country.pipe';

describe('CountryPipe', () => {
  const initialState = {
    countryList: {
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

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      providers: [
        provideMockStore({ initialState: initialState })
      ],
    });
  });

  it('transform country code to country object', (done) => {
    const store = TestBed.inject(MockStore);
    const pipe = new CountryPipe(store);

    pipe.transform('DEU').subscribe((country) => {
      expect(country).toBeTruthy();
      expect(country?.name.common).toBe('Germany');

      done();
    });
  });
});
