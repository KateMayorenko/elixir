import {Component} from '@angular/core';
import {Store} from "@ngrx/store";
import {filterCards} from "../cards/store/cards.actions";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {

  constructor(private store: Store) {}

  onSearch(event: any) {
    const name = event.target.value;
    this.store.dispatch(filterCards({ name }));
  }
}

