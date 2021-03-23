import { FC } from "react";

import { useTypedSelector } from "../../../hooks/useTypedSeletor";
import { useActions } from "../../../hooks/useActions";
import { createSelector } from "reselect";
import { useHistory } from "react-router-dom";

import { CollectionItem } from "../../../models";

import CustomButton from "../../custom-button/CustomButton.component";
import CartItem from "../cart-item/CartItem.component";

import "./CartDropdown.styles.scss";

const getCartItems = createSelector(
  (cartItems: CollectionItem[]) => cartItems,
  (cartItems: CollectionItem[]) => {
    console.log("getting car items");
    return cartItems;
  }
);

const CartDropdown: FC = () => {
  const history = useHistory();
  const { setHiddenCart } = useActions();
  const cartItems = useTypedSelector(({ cart }) => getCartItems(cart.cartItems));

  const handleGoToCheckout = () => {
    setHiddenCart();
    history.push("/checkout");
  };
  return (
    <div className="cart-dropdown">
      <div className="cart-items">{cartItems.length ? cartItems.map((item: CollectionItem) => <CartItem key={item.id} {...item} />) : <span className="empty-message">Your cart is empty</span>}</div>
      <CustomButton onClick={handleGoToCheckout} type="button">
        Go To Checkout
      </CustomButton>
    </div>
  );
};

export default CartDropdown;
