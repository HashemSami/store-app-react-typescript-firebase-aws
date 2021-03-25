import { CartActionTypes } from "../action-types";

import { CollectionItem } from "../../models";

interface ToggleCartHidden {
  type: CartActionTypes.TOGGLE_CART_HIDDEN;
}

interface AddItem {
  type: CartActionTypes.ADD_ITEM;
  payload: CollectionItem;
}

interface ClearItem {
  type: CartActionTypes.CLEAR_ITEM_FROM_CART;
  payload: number;
}

interface RemoveItem {
  type: CartActionTypes.REMOVE_ITEM;
  payload: { id: number; quantity: number };
}
export type CartActions = ToggleCartHidden | AddItem | ClearItem | RemoveItem;
