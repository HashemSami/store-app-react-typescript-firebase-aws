import { FC } from "react";

import { useTypedSelector } from "../../hooks/useTypedSeletor";
import { createSelector } from "reselect";

import { CollectionItem } from "../../models";

import CustomButton from "../custom-button/CustomButton.component";
import CartItem from "../cart-item/CartItem.component";

import "./CartDropdown.styles.scss";

const getCartItems = createSelector(
  (cartItems) => cartItems,
  (cartItems: any) => {
    console.log("getting car items");
    return cartItems;
  }
);

const CartDropdown: FC = () => {
  const cartItems = useTypedSelector(({ cart }) =>
    getCartItems(cart.cartItems)
  );
  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        {cartItems.map((item: CollectionItem) => (
          <CartItem key={item.id} {...item} />
        ))}
      </div>
      <CustomButton type="button">Go To Checkout</CustomButton>
    </div>
  );
};

export default CartDropdown;
