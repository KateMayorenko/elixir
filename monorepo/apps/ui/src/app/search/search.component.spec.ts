import {ComponentFixture, TestBed} from '@angular/core/testing';
import {SearchComponent} from './search.component';
import {MockStore, provideMockStore} from "@ngrx/store/testing";
import {CardState} from "../cards/store/cards.reducer";
import {Store} from "@ngrx/store";
import {filterCards} from "../cards/store/cards.actions";

describe('SearchComponent', () => {
  let component: SearchComponent;
  let fixture: ComponentFixture<SearchComponent>;
  let mockStore: MockStore;
  const initialState: CardState = {
    cards: [
      {
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
    ], // Initialize with your card data
    filteredCards: [
      {
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
    ],
  }

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SearchComponent],
      providers: [
        provideMockStore({ initialState }),
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(SearchComponent);
    component = fixture.componentInstance;
    mockStore = TestBed.inject(Store) as MockStore;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should dispatch filterCards action on search', () => {
    const inputValue = 'example name';

    // Create a spy on the store's dispatch method
    const dispatchSpy = jest.spyOn(mockStore, 'dispatch');

    const inputElement = fixture.nativeElement.querySelector('input');
    inputElement.value = inputValue;
    inputElement.dispatchEvent(new Event('input'));

    const expectedAction = filterCards({ name: inputValue });
    expect(dispatchSpy).toHaveBeenCalledWith(expectedAction);

    // Restore the original implementation of the dispatch method
    dispatchSpy.mockRestore();
  });
});
