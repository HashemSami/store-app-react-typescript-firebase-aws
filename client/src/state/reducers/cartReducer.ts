import { CartActionTypes } from "../action-types";

import { CartActions } from "../actions";
import { CollectionItem } from "../../models";
import { addItemToCart, clearCartItem, decreaseQuantity } from "../utils/cartUtils";

interface CartState {
  hidden: boolean;
  cartItems: CollectionItem[];
}

const initialState: CartState = { hidden: true, cartItems: [] };

const cartReducer = (state: CartState = initialState, action: CartActions): CartState => {
  switch (action.type) {
    case CartActionTypes.TOGGLE_CART_HIDDEN:
      return { ...state, hidden: !state.hidden };
    case CartActionTypes.ADD_ITEM:
      return {
        ...state,
        cartItems: addItemToCart(state.cartItems, action.payload),
      };
    case CartActionTypes.CLEAR_ITEM_FROM_CART:
      return {
        ...state,
        cartItems: clearCartItem(state.cartItems, action.payload),
      };
    case CartActionTypes.REMOVE_ITEM:
      const { id, quantity } = action.payload;
      return {
        ...state,
        cartItems: decreaseQuantity(state.cartItems, id, quantity),
      };

    default:
      return state;
  }
};

export default cartReducer;
