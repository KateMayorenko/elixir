// result.module.ts
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { resultReducer } from './cards.reducer';
import { CardsEffects } from './cards.effects';

@NgModule({
  imports: [
    StoreModule.forFeature('cards', resultReducer),
    EffectsModule.forFeature([CardsEffects])
  ]
})
export class CardsModule {}
