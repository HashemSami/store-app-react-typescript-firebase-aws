import { FC } from "react";
import "./StripeButton.styles.scss";

import StripeCheckout, { Token } from "react-stripe-checkout";

interface StripeButtonProps {
  price: number;
}

const StripeButton: FC<StripeButtonProps> = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey = "pk_test_xrGrgQCbkda4Pi4o2Q7MXzSh007Yd42lfp";

  const onToken = (token: Token) => {
    console.log(token);
    alert("Payment Successful");
  };

  return <StripeCheckout label="Pay Now" name="CRWN Clothing Ltd." billingAddress shippingAddress description={`Your total is $${price}`} amount={priceForStripe} panelLabel="Pay Now" token={onToken} stripeKey={publishableKey} />;
};

export default StripeButton;
