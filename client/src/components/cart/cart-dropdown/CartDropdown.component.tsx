import { FC } from "react";

import { useTypedSelector } from "../../../hooks/useTypedSeletor";
import { useActions } from "../../../hooks/useActions";
import { useCreateSelector } from "../../../hooks/useCreateSelector";
// import { createSelector } from "reselect";
import { useHistory } from "react-router-dom";

import { CollectionItem } from "../../../models";

import CustomButton from "../../custom-button/CustomButton.component";
import CartItem from "../cart-item/CartItem.component";

import "./CartDropdown.styles.scss";

const CartDropdown: FC = () => {
  const history = useHistory();

  const { setHiddenCart } = useActions();

  const { cartItemsCreateSelectors } = useCreateSelector();

  const cartItems = useTypedSelector(({ cart: { cartItems } }) => cartItemsCreateSelectors(cartItems));

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
