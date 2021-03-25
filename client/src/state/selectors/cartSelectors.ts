import { createSelector } from "reselect";

import { RootState } from "../reducers";
import { CollectionItem } from "../../models";

type CartItems = RootState["cart"]["cartItems"];
type Hidden = RootState["cart"]["hidden"];

// return cart Items
export const cartItemsCreateSelectors = createSelector(
  (cartItems: CartItems) => cartItems,
  (cartItems: CartItems) => {
    console.log("getting car items");
    return cartItems;
  }
);

// return items count
export const ItemsCountCreateSelectors = createSelector(
  (cartItems: CartItems) => cartItems,
  (cartItems: CartItems) =>
    cartItems.reduce((accumelatedquantity: number, currItem: CollectionItem) => {
      if (!currItem.quantity) return 0;
      return accumelatedquantity + currItem.quantity;
    }, 0)
);

// dropdown toggle
export const hiddenCreateSelector = createSelector(
  (hidden: Hidden) => hidden,
  (hidden: Hidden) => hidden
);

// calculate the total ammount of the cart items
export const cartTotalCreateSelector = createSelector(
  (cartItems: CartItems) => cartItems,
  (cartItems: CartItems) =>
    cartItems.reduce((accumelatedquantity: number, currItem: CollectionItem) => {
      if (!currItem.quantity) return 0;
      return accumelatedquantity + currItem.quantity * currItem.price;
    }, 0)
);
