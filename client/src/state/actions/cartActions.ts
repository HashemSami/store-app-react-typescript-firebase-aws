import { CartActionTypes } from "../action-types";

interface ToggleCartHidden {
  type: CartActionTypes.TOGGLE_CART_HIDDEN;
}

export type CartActions = ToggleCartHidden;
