import {createReducer, on} from '@ngrx/store';
import {setSearchText} from './search.actions';

export interface SearchState {
  searchText: string;
}

export const initialState: SearchState = {
  searchText: '',
};

export const searchReducer = createReducer(
  initialState,
  on(setSearchText, (state, {searchText}) => ({...state, searchText}))
);
