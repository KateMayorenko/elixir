import {Component, OnInit} from '@angular/core';
import {DataModel} from "@monorepo/data-models";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  _items: DataModel[] = [{
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

  searchText = '';
  constructor() {
  }

  ngOnInit() {

  }

}

