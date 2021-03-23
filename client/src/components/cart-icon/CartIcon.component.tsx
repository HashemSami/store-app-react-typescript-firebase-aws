import { FC } from "react";
import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";

import { useActions } from "../../hooks/useActions";
import { useTypedSelector } from "../../hooks/useTypedSeletor";
import { createSelector } from "reselect";

import { CollectionItem } from "../../models";

import "./CartIcon.styles.scss";

const createSelectorItemsCount = createSelector(
  (cartItems: CollectionItem[]) => cartItems,
  (cartItems: CollectionItem[]) =>
    cartItems.reduce(
      (accumelatedquantity: number, currItem: CollectionItem) => {
        if (!currItem.quantity) return 0;
        return accumelatedquantity + currItem.quantity;
      },
      0
    )
);

const CartIcon: FC = () => {
  const { setHiddenCart } = useActions();
  const itemsCount = useTypedSelector(({ cart }) =>
    createSelectorItemsCount(cart.cartItems)
  );
  return (
    <div className="cart-icon" onClick={setHiddenCart}>
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">{itemsCount}</span>
    </div>
  );
};

export default CartIcon;
