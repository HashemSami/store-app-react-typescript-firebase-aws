import { FC } from "react";
import { ReactComponent as ShoppingIcon } from "../../../assets/shopping-bag.svg";

import { useActions } from "../../../hooks/useActions";
import { useTypedSelector } from "../../../hooks/useTypedSeletor";
import { useCreateSelector } from "../../../hooks/useCreateSelector";

import "./CartIcon.styles.scss";

const CartIcon: FC = () => {
  const { setHiddenCart } = useActions();

  const { ItemsCountCreateSelectors } = useCreateSelector();

  const itemsCount = useTypedSelector(({ cart: { cartItems } }) => ItemsCountCreateSelectors(cartItems));

  return (
    <div className="cart-icon" onClick={setHiddenCart}>
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">{itemsCount}</span>
    </div>
  );
};

export default CartIcon;
