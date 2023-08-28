import { createSelector } from '@ngrx/store';
import { CardState } from './cards.reducer';

export const selectCardState = (state: { cards: CardState }) => state.cards;

export const selectFilteredCards = createSelector(
  selectCardState,
  (state: CardState) => state.filteredCards
);
