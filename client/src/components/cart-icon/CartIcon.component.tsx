import { FC } from "react";
import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";

import { useActions } from "../../hooks/useActions";
import { useTypedSelector } from "../../hooks/useTypedSeletor";

import "./CartIcon.styles.scss";

const CartIcon: FC = () => {
  const { setHiddenCart } = useActions();
  const itemsCount = useTypedSelector(({ cart }) =>
    cart.cartItems.reduce((accumelatedquantity, currItem) => {
      if (!currItem.quantity) return 0;
      return accumelatedquantity + currItem.quantity;
    }, 0)
  );
  return (
    <div className="cart-icon" onClick={setHiddenCart}>
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">{itemsCount}</span>
    </div>
  );
};

export default CartIcon;
