import { FC } from "react";

import { CollectionItem } from "../../models";

import "./CheckoutItem.styles.scss";

const CheckoutItem: FC<CollectionItem> = ({ name, imageUrl, price, quantity }) => {
  return (
    <div className="checkout-item">
      <div className="image-container">
        <img src={imageUrl} alt="item" />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">{quantity ? quantity : 0}</span>
      <span className="price">${price}</span>
      <div className="remove-button">&#10005;</div>
    </div>
  );
};

export default CheckoutItem;
