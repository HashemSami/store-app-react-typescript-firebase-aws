import { FC } from "react";

import { useTypedSelector } from "../../hooks/useTypedSeletor";
import { CollectionItem } from "../../models";
import { createSelector } from "reselect";

import "./CheckoutPage.styles.scss";

const createSelectorCartItems = createSelector(
  (cartItems: CollectionItem[]) => cartItems,
  (cartItems: CollectionItem[]) => {
    console.log("getting car items");
    return cartItems;
  }
);

const createSelectorcartTotal = createSelector(
  (cartItems: CollectionItem[]) => cartItems,
  (cartItems: CollectionItem[]) =>
    cartItems.reduce(
      (accumelatedquantity: number, currItem: CollectionItem) => {
        if (!currItem.quantity) return 0;
        return accumelatedquantity + currItem.quantity * currItem.price;
      },
      0
    )
);

const CheckoutPage: FC = () => {
  const cartItems = useTypedSelector(({ cart }) =>
    createSelectorCartItems(cart.cartItems)
  );
  const cartTotal = useTypedSelector(({ cart: { cartItems } }) =>
    createSelectorcartTotal(cartItems)
  );

  return (
    <div className="checkout-page">
      <div className="checkout-header">
        <div className="header-block">
          <span>Product</span>
        </div>
        <div className="header-block">
          <span>Discription</span>
        </div>
        <div className="header-block">
          <span>Quantity</span>
        </div>
        <div className="header-block">
          <span>Price</span>
        </div>
        <div className="header-block">
          <span>Remove</span>
        </div>
      </div>
      {cartItems.map((item) => item.name)}

      <div className="total">
        <span>Total: {cartTotal}</span>
      </div>
    </div>
  );
};

export default CheckoutPage;
