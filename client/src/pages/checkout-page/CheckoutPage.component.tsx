import { FC } from "react";

import { useTypedSelector } from "../../hooks/useTypedSeletor";
import { useCreateSelector } from "../../hooks/useCreateSelector";

import CheckoutItem from "../../components/checkout-item/CheckoutItem.component";

import "./CheckoutPage.styles.scss";

const CheckoutPage: FC = () => {
  const { cartItemsCreateSelectors, cartTotalCreateSelector } = useCreateSelector();

  const cartItems = useTypedSelector(({ cart: { cartItems } }) => cartItemsCreateSelectors(cartItems));

  const cartTotal = useTypedSelector(({ cart: { cartItems } }) => cartTotalCreateSelector(cartItems));

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
      {cartItems.map(item => (
        <CheckoutItem key={item.id} {...item} />
      ))}

      <div className="total">
        <span>Total: ${cartTotal}</span>
      </div>
    </div>
  );
};

export default CheckoutPage;
