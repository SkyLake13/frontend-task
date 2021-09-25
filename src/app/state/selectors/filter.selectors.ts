import { createSelector } from '@ngrx/store';
import { FilterState } from '@state/reducers';
import { AppState } from '../app.state';

export const selectFilterState = (state: AppState) => state.filter;

export const selectFilter = createSelector(
    selectFilterState,
    (state: FilterState) => state
);