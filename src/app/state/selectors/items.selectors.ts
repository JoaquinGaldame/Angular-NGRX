import { createSelector } from "@ngrx/store";
import { AppState } from "../app.state";

// {
//   items: { --> PADRE
//     loading: false, --> HIJO
//     items: [] --> HIJO
//   }
// }

export const selectItemsFeature = (state: AppState) => state.items; //Selector PADRE "items"

// selector HIJO
export const selectListItems = createSelector(
  selectItemsFeature,
  (state) => state.items
);

// selector HIJO
export const selectLoading = createSelector(
  selectItemsFeature,
  (state) => state.loading
);


// Se pueden ir agregando selectores en uno especifico
// Si tuvieramos varios selectores se vería así
// export const selectListItems = createSelector(
//   selectItemsFeature,
//   selectShopping,
// -- a sería para selectItemsFeature
// -- b sería para selectShopping
//   (a, b) => state.counter 
// );