import { ItemState } from "@core/models/items.state";
import { ActionReducerMap } from "@ngrx/store";
import { itemsReducer } from "./reducers/items.reducers";

// Pueden ir definidos otros datos de los demás componentes
export interface AppState {
  items: ItemState
  //favourites: favouriteState
  //user: userState
}

export const ROOT_REDUCERS: ActionReducerMap<AppState> = {
  items: itemsReducer
}