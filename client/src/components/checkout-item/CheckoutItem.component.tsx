import { FC } from "react";
import "./CheckoutItem.styles.scss";

import { useActions } from "../../hooks/useActions";
import { CollectionItem } from "../../models";

const CheckoutItem: FC<CollectionItem> = item => {
  const { clearItem, removeItem, addItem } = useActions();
  const { id, name, imageUrl, price, quantity } = item;

  return (
    <div className="checkout-item">
      <div className="image-container">
        <img src={imageUrl} alt="item" />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">
        <div className="arrow" onClick={() => removeItem(id, quantity ? quantity : 0)}>
          &#10094;
        </div>
        <span className="value">{quantity ? quantity : 0}</span>
        <div className="arrow" onClick={() => addItem(item)}>
          &#10095;
        </div>
      </span>
      <span className="price">${price}</span>
      <div className="remove-button" onClick={() => clearItem(id)}>
        &#10005;
      </div>
    </div>
  );
};

export default CheckoutItem;
