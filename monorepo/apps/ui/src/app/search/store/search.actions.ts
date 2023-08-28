// search.actions.ts
import { createAction, props } from '@ngrx/store';

export const setSearchText = createAction('[Search] Set Search Text', props<{ searchText: string }>());
