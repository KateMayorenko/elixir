import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {of} from 'rxjs';
import {catchError, map, switchMap} from 'rxjs/operators';
import * as CardsActions from './cards.actions';
import {DataModel} from "@monorepo/data-models";

@Injectable()
export class CardsEffects {

  elixirsList: DataModel[] = [{
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
  ];

  constructor(private actions$: Actions) {
  }

  searchEffect$ = createEffect(() =>
    this.actions$.pipe(
      ofType(CardsActions.setSearchText),
      switchMap(action =>
        of(this.elixirsList).pipe(
          // Simulate search operation with mock data
          map(elixirsList => {
            console.log(elixirsList);
            if (action.searchText) {
              elixirsList = elixirsList.filter(elixir =>
                elixir.name.toLowerCase().includes(action.searchText.toLowerCase())
              );
            }
            return elixirsList;
          }),
          map(cards => CardsActions.updateElixirsList({elixirsList: cards})),
          catchError(error => of(/* Handle error */))
        )
      )
    )
  );
}
