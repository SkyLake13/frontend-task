import { startLoader, stopLoader } from '../actions';
import { loadingReducer } from './loading.reducer';

describe('loadingReducer', () => {
    it('should reduce startLoader action', () => {
        const initialState = {
            loading: false
        };

        const newState = loadingReducer(initialState, startLoader());

        expect(newState).toBeDefined();
        expect(newState.loading).toBeTrue();
    });

    it('should reduce stopLoader action', () => {
        const initialState = {
            loading: false
        };

        const newState = loadingReducer(initialState, stopLoader());

        expect(newState).toBeDefined();
        expect(newState.loading).toBeFalse();
    });
});
