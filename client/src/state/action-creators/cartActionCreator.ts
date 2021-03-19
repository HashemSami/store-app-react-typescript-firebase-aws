import { CartActionTypes } from "../action-types";
// import {Dispatch} from 'redux'

import { CartActions } from "../actions";

export const setHiddenCart = (): CartActions => {
  return { type: CartActionTypes.TOGGLE_CART_HIDDEN };
};
