import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { appRoutes } from './app.routes';
import { CardsComponent } from './cards/cards.component';
import { SingleCardComponent } from './cards/single-card/single-card.component';
import { SearchComponent } from './search/search.component';
import { DetailedPageComponent } from './detailed-page/detailed-page.component';
import {FormsModule} from "@angular/forms";
import {StoreModule} from "@ngrx/store";
import {cardReducer} from "./cards/store/cards.reducer";

@NgModule({
  declarations: [
    AppComponent,
    CardsComponent,
    SingleCardComponent,
    SearchComponent,
    DetailedPageComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes, {initialNavigation: 'enabledBlocking'}),
    FormsModule,
    StoreModule.forRoot({ cards: cardReducer }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
