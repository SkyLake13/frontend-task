import { getCountrySuccess } from '../actions';
import { countryReducer } from './country.reducer';

describe('CountriesReducer', () => {
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
});
