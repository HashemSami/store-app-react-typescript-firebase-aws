import { CollectionItem } from "../models";

export const addItemToCart = (
  cartItems: CollectionItem[],
  cartItemsToAdd: CollectionItem
) => {
  const exitingCartItem = cartItems.find(
    (item) => item.id === cartItemsToAdd.id
  );

  if (exitingCartItem) {
    return cartItems.map((item) => {
      return item.id === cartItemsToAdd.id && item.quantity
        ? { ...item, quantity: item.quantity + 1 }
        : item;
    });
  }

  return [...cartItems, { ...cartItemsToAdd, quantity: 1 }];
};
