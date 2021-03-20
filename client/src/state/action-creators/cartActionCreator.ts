import { CartActionTypes } from "../action-types";
// import {Dispatch} from 'redux'

import { CartActions } from "../actions";
import { CollectionItem } from "../../models";

export const setHiddenCart = (): CartActions => {
  return { type: CartActionTypes.TOGGLE_CART_HIDDEN };
};

export const addItem = (item: CollectionItem): CartActions => {
  return { type: CartActionTypes.ADD_ITEM, payload: item };
};
