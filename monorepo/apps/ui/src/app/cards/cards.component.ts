import {Component, OnInit} from '@angular/core';
import {DataModel} from "@monorepo/data-models";
import {select, Store} from "@ngrx/store";
import {Observable} from "rxjs";
import {CardsState} from "./store/cards.state";

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit{

  initialElixirsList: DataModel[] = [{
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

  elixirsList$: Observable<DataModel[]> = new Observable<DataModel[]>(); // Initialize the property

  constructor(private store: Store<CardsState>) {
    this.elixirsList$ = this.store.select(state => state.elixirsList);
  }

  ngOnInit() {
    // Set the initial value of the elixirsList
    this.store.dispatch(CardsActions.updateElixirsList({ elixirsList: this.initialElixirsList }));
  }
}
