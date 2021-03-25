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

export const clearItem = (id: number): CartActions => {
  return { type: CartActionTypes.CLEAR_ITEM_FROM_CART, payload: id };
};

export const removeItem = (id: number, quantity: number): CartActions => {
  return { type: CartActionTypes.REMOVE_ITEM, payload: { id, quantity } };
};
