import {Component, OnInit} from '@angular/core';
import {DataModel} from "@monorepo/data-models";
import {showDetailsInSingleCard} from "./single-card/single-card.actions";
import {Store} from "@ngrx/store";

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit{

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

  filteredItems: DataModel[] = [];

  constructor(private store: Store) {
  }


  ngOnInit() {
  }

  onShowDivClick() {
    this.store.dispatch(showDetailsInSingleCard());
  }
}
