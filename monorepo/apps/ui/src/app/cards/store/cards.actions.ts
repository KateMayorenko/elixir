import { createAction, props } from '@ngrx/store';
import {DataModel} from "@monorepo/data-models";

export const filterCards = createAction(
  '[DataModel] Filter Cards',
  props<{ name: string }>()
);
