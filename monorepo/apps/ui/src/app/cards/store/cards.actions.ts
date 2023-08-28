import {createAction, props} from '@ngrx/store';

export const setSearchText = createAction('[Result] Set Search Text', props<{ searchText: string }>());
export const updateElixirsList = createAction('[Result] Update Elixirs List', props<{ elixirsList: any[] }>());
