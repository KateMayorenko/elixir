import {Component, Input, OnInit} from '@angular/core';
import {DataModel} from "@monorepo/data-models";


@Component({
  selector: 'app-detailed-page',
  templateUrl: './detailed-page.component.html',
  styleUrls: ['./detailed-page.component.css']
})
export class DetailedPageComponent {

  @Input() elixir: DataModel = {name: '', ingredient: '', effect: '', sideEffect: ''};

  constructor() {}

}
