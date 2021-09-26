import { createReducer, on } from "@ngrx/store";

import { startLoader , stopLoader} from "../actions";

export interface LoadingState {
    loading: boolean
}

const initialState: LoadingState = {
    loading: false
}

const _loadingReducer = createReducer(
    initialState,
    on(startLoader, (state) => {
        return {
            ...state,
            loading: true
        }
    }),
    on(stopLoader, (state) => {
        return {
            ...state,
            loading: false
        }
    })
);

export const loadingReducer = (state: LoadingState | undefined, action: any) => _loadingReducer(state, action);