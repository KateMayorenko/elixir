import {createReducer, on} from '@ngrx/store';
import * as CardsActions from './cards.actions';
import {CardsState} from './cards.state';

const initialState: CardsState = {
  searchText: '',
  elixirsList: []
};

export const resultReducer = createReducer(
  initialState,
  on(CardsActions.setSearchText, (state, {searchText}) => ({...state, searchText})),
  on(CardsActions.updateElixirsList, (state, {elixirsList}) => ({...state, elixirsList}))
);
