import { FC } from "react";

import { CollectionItem } from "../../../models";

import "./CartItem.styles.scss";

const CartItem: FC<CollectionItem> = ({ imageUrl, price, name, quantity }) => {
  return (
    <div className="cart-item">
      <img src={imageUrl} alt="item" />
      <div className="item-details">
        <span className="name">{name}</span>
        <span className="price">
          ${quantity}x{price}
        </span>
      </div>
    </div>
  );
};

export default CartItem;
