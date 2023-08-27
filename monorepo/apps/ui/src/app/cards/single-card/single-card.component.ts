import {Component, Input} from '@angular/core';
import {DataModel} from "@monorepo/data-models";

@Component({
  selector: 'app-single-card',
  templateUrl: './single-card.component.html',
  styleUrls: ['./single-card.component.css']
})
export class SingleCardComponent {
  @Input() elixir: DataModel = {name: '', ingredient: '', effect: '', sideEffect: ''};

}
