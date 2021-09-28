import { getCountriesSuccess, getCountry, getCountrySuccess } from '../actions';
import { countriesReducer } from './countries.reducer';

describe('CountriesReducer', () => {
    it('should reduce getCountriesSuccess action', () => {
        const initialState = {
            countries: []
        };

        const newState = countriesReducer(initialState, getCountriesSuccess({
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
            ]
        }));

        expect(newState).toBeDefined();
        expect(newState.countries.length).toEqual(1);
    });
});
