import { FC } from "react";

import CustomButton from "../custom-button/CustomButton.component";

import "./CartDropdown.styles.scss";

const CartDropdown: FC = () => {
  return (
    <div className="cart-dropdown">
      <div className="cart-items" />
      <CustomButton type="button">Go To Checkout</CustomButton>
    </div>
  );
};

export default CartDropdown;
