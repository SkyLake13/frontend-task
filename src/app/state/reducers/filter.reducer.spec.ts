import { filterCountries } from '../actions';
import { filterReducer } from './filter.reducer';

describe('filterReducer', () => {
    it('should reduce filterCountries action', () => {
        const initialState = {
            country: '',
            region: ''
        };

        const newState = filterReducer(initialState, filterCountries({
            country: 'germany',
            region: 'europe'
        }));

        expect(newState).toBeDefined();
        expect(newState.country).toEqual('germany');
        expect(newState.region).toEqual('europe');
    });
});
