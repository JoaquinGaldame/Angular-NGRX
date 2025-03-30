import { ItemModel } from "./Item.interface";

export interface ItemState {
  loading: boolean,
  items: ReadonlyArray<ItemModel>;
}