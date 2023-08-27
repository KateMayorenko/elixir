import {Component, EventEmitter, Input, Output} from '@angular/core';
import {DataModel} from "@monorepo/data-models";
import {Store} from "@ngrx/store";
import {showDetailsInSingleCard} from "./single-card.actions";

@Component({
  selector: 'app-single-card',
  templateUrl: './single-card.component.html',
  styleUrls: ['./single-card.component.css']
})
export class SingleCardComponent {
  @Output() showDiv = new EventEmitter<void>();
  @Input() elixir: DataModel = {name: '', ingredient: '', effect: '', sideEffect: ''};

  constructor() {}

}
