import { CartActionTypes } from "../action-types";

import { CollectionItem } from "../../models";

interface ToggleCartHidden {
  type: CartActionTypes.TOGGLE_CART_HIDDEN;
}

interface AddItem {
  type: CartActionTypes.ADD_ITEM;
  payload: CollectionItem;
}
export type CartActions = ToggleCartHidden | AddItem;
