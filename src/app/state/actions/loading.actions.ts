import { createAction } from "@ngrx/store";


export const startLoader = createAction('[Loading] start loading');
export const stopLoader = createAction('[Loading] stop loading');