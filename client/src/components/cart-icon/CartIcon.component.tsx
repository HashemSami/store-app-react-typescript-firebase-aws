import { FC } from "react";
import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";

import { useActions } from "../../hooks/useActions";

import "./CartIcon.styles.scss";

const CartIcon: FC = () => {
  const { setHiddenCart } = useActions();
  return (
    <div className="cart-icon" onClick={setHiddenCart}>
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">0</span>
    </div>
  );
};

export default CartIcon;
