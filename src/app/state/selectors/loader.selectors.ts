import { createSelector } from '@ngrx/store';
import { LoadingState } from '@state/reducers';

import { AppState } from '../app.state';

export const selectLoaderState = (state: AppState) => state.loader;

export const selectLoader = createSelector(
    selectLoaderState,
    (state: LoadingState) => state.loading
);