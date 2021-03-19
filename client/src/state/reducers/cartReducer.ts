import { CartActionTypes } from "../action-types";

import { CartActions } from "../actions";

interface CartState {
  hidden: boolean;
}

const initialState = { hidden: true };

const cartReducer = (state: CartState = initialState, action: CartActions) => {
  switch (action.type) {
    case CartActionTypes.TOGGLE_CART_HIDDEN:
      return { ...state, hidden: !state.hidden };
    default:
      return state;
  }
};

export default cartReducer;
