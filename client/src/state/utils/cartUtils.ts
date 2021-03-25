import { CollectionItem } from "../../models";

export const addItemToCart = (cartItems: CollectionItem[], cartItemsToAdd: CollectionItem) => {
  const exitingCartItem = cartItems.find(item => item.id === cartItemsToAdd.id);

  if (exitingCartItem) {
    return cartItems.map(item => {
      return item.id === cartItemsToAdd.id && item.quantity ? { ...item, quantity: item.quantity + 1 } : item;
    });
  }

  return [...cartItems, { ...cartItemsToAdd, quantity: 1 }];
};

export const clearCartItem = (cartItems: CollectionItem[], id: number) => {
  return cartItems.filter(item => item.id !== id);
};

// export const increaseQuantity = (cartItems: CollectionItem[], id: number, quantity: number) => {
//   return cartItems.map(item => (item.id === id ? { ...item, quantity: item.quantity ? item.quantity + 1 : quantity } : item));
// };

export const decreaseQuantity = (cartItems: CollectionItem[], id: number, quantity: number) => {
  const existingCartItem = cartItems.find(item => item.id === id);

  if (existingCartItem?.quantity === 1) {
    return cartItems.filter(item => item.id !== id);
  }
  return cartItems.map(item => (item.id === id ? { ...item, quantity: item.quantity ? item.quantity - 1 : quantity } : item));
};
