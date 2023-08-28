import {Component, OnInit} from '@angular/core';
import {Store} from "@ngrx/store";
import * as CardsActions from '../cards/store/cards.actions';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {

  searchText = '';

  constructor(private store: Store) {}

  onSearchTextChanged(input: string) {
    this.store.dispatch(CardsActions.setSearchText({ searchText: input }));
  }
}

