import { FC } from "react";

import { useActions } from "../../hooks/useActions";
import { useTypedSelector } from "../../hooks/useTypedSeletor";

import CustomButton from "../custom-button/CustomButton.component";
import CartItem from "../cart-item/CartItem.component";

import "./CartDropdown.styles.scss";

const CartDropdown: FC = () => {
  const cartItems = useTypedSelector(({ cart }) => cart.cartItems);
  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        {cartItems.map((item) => (
          <CartItem key={item.id} {...item} />
        ))}
      </div>
      <CustomButton type="button">Go To Checkout</CustomButton>
    </div>
  );
};

export default CartDropdown;
