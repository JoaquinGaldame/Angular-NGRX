import { ItemModel } from "@core/models/Item.interface";
import { createAction, props } from "@ngrx/store";

export const loadItems = createAction(
  '[Item List] Load Items'
)

export const loadedItems = createAction(
  '[Item List] Loaded Succes',
  props<{ items: ItemModel[] }>()
)