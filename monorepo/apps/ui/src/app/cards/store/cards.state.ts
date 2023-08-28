import {DataModel} from "@monorepo/data-models";

export interface CardsState {
  searchText: string;
  elixirsList:    [{
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
]; // Change the type according to your data structure
}
