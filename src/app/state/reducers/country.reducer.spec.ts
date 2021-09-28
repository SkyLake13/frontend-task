import { clearCountry, getCountryFailure, getCountrySuccess } from '../actions';
import { countryReducer } from './country.reducer';

describe('CountryReducer', () => {
    it('should reduce getCountrySuccess action', () => {
        const initialState = {
            countryDetail: null,
            error: null
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

    it('should reduce clearCountry action', () => {
        const initialState = {
            countryDetail: null,
            error: null
        };

        const newState = countryReducer(initialState, clearCountry());

        expect(newState).toBeDefined();
        expect(newState.countryDetail).toBeNull();
    });

    it('should reduce getCountryFailure action', () => {
        const initialState = {
            countryDetail: null,
            error: null
        };

        const newState = countryReducer(initialState, getCountryFailure({ error: 'error' }));

        expect(newState).toBeDefined();
        expect(newState.error).toEqual('error');
    });
});
