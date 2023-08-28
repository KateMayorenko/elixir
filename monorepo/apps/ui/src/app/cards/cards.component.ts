import {Component, OnInit} from '@angular/core';
import {Observable} from "rxjs";
import {DataModel} from "@monorepo/data-models";
import {Store} from "@ngrx/store";
import {selectFilteredCards} from "./store/cards.selectors";

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit{

  filteredCards$: Observable<DataModel[]> = new Observable<DataModel[]>;

  constructor(private store: Store) {}

  ngOnInit() {
    // @ts-ignore
    this.filteredCards$ = this.store.select(selectFilteredCards);
  }
}
