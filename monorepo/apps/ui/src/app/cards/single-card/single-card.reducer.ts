import { createReducer, on } from '@ngrx/store';
import { showDetailsInSingleCard } from './single-card.actions';

export interface ComponentSingleCardState {
  detailsVisible: boolean;
}

export const initialState: ComponentSingleCardState = {
  detailsVisible: false,
};

export const componentAReducer = createReducer(
  initialState,
  on(showDetailsInSingleCard, (state) => ({ ...state, detailsVisible: true }))
);
