import { createReducer, on } from '@ngrx/store';
import {DataModel} from "@monorepo/data-models";
import {filterCards} from "./cards.actions";


export interface CardState {
  cards: DataModel[];
  filteredCards: DataModel[];
}

const initialState: CardState = {
  cards: [
    {
      name: '1',
      ingredient: 'Sugar',
      effect: '',
      sideEffect: ''
    },
    {
      name: '2',
      ingredient: 'Milk',
      effect: 'none',
      sideEffect: 'yes'
    },
    {
      name: '3',
      ingredient: 'Butter',
      effect: 'strong',
      sideEffect: 'none'
    },
    {
      name: '4',
      ingredient: 'Magic',
      effect: 'some',
      sideEffect: 'yes'
    },
    {
      name: '5',
      ingredient: 'Water',
      effect: 'weakness',
      sideEffect: 'none'
    }
  ], // Initialize with your card data
  filteredCards: [
    {
      name: '1',
      ingredient: 'Sugar',
      effect: '',
      sideEffect: ''
    },
    {
      name: '2',
      ingredient: 'Milk',
      effect: 'none',
      sideEffect: 'yes'
    },
    {
      name: '3',
      ingredient: 'Butter',
      effect: 'strong',
      sideEffect: 'none'
    },
    {
      name: '4',
      ingredient: 'Magic',
      effect: 'some',
      sideEffect: 'yes'
    },
    {
      name: '5',
      ingredient: 'Water',
      effect: 'weakness',
      sideEffect: 'none'
    }
  ],
};

export const cardReducer = createReducer(
  initialState,
  on(filterCards, (state, { name }) => {
    const filteredCards = state.cards.filter(card =>
      card.name.toLowerCase().includes(name.toLowerCase())
    );

    return {
      ...state,
      filteredCards,
    };
  })
);
