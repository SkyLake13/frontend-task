import { getCountriesSuccess, getCountry, getCountrySuccess } from '../actions';
import { countriesReducer } from './countries.reducer';

describe('CountriesReducer', () => {
    it('should reduce getCountriesSuccess action', () => {
        const initialState = {
            countries: [],
            countryDetail: null
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

        const newState = countriesReducer(initialState, getCountry({ code: 'DEU'}));

        expect(newState).toBeDefined();
        expect(newState.countryDetail).toBeDefined();
        expect(newState.countryDetail?.name.common).toEqual('Germany');
    });

    it('should reduce getCountrySuccess action', () => {
        const initialState = {
            countries: [],
            countryDetail: null
        };

        const newState = countriesReducer(initialState, getCountrySuccess({
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
