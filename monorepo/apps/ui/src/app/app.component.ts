import { Component } from '@angular/core';
import {ComponentSingleCardState} from "./cards/single-card/single-card.reducer";
import {Store} from "@ngrx/store";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'ui';

  // @ts-ignore
  detailsVisible$ = this.store.select((state: { singleCard: ComponentSingleCardState }) => state.singleCard.detailsVisible) ;

  constructor(private store: Store) {}
}
