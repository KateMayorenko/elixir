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
import {CardsModule} from "./cards/store/cards.module";
import {EffectsModule} from "@ngrx/effects";
import {CardsEffects} from "./cards/store/cards.effects";

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
    StoreModule.forRoot(),
    CardsModule,
    EffectsModule.forRoot([CardsEffects]),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
