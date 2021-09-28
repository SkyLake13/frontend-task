import { getCountry, getCountrySuccess } from '../actions';
import { countriesReducer } from './countries.reducer';
import { countryReducer } from './country.reducer';

describe('CountriesReducer', () => {
    it('should reduce getCountry action', () => {
        const initialState = {
            countries: [
                {
                    cca3: 'DEU',
                    name: {
                      common: 'Germany'
                    },
                    capital: ['Berlin'],
                    region: 'europe',
                    subregion: '',
                    borders: [],
                    area: 8798,
                    flags: []
                }
            ],
            countryDetail: null
        };

        const newState = countryReducer(initialState, getCountry({ code: 'DEU'}));

        expect(newState).toBeDefined();
        expect(newState.countryDetail).toBeDefined();
        expect(newState.countryDetail?.name.common).toEqual('Germany');
    });

    it('should reduce getCountrySuccess action', () => {
        const initialState = {
            countryDetail: null
        };

        const newState = countryReducer(initialState, getCountrySuccess({
            country: {
                cca3: 'DEU',
                    name: {
                      common: 'Germany'
                    },
                    capital: ['Berlin'],
                    region: 'europe',
                    subregion: '',
                    borders: [],
                    area: 8798,
                    flags: []
            }
        }));

        expect(newState).toBeDefined();
        expect(newState.countryDetail).toBeDefined();
        expect(newState.countryDetail?.name.common).toEqual('Germany');
    });
});
