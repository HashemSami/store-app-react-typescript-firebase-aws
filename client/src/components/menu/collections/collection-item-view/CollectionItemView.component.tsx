import React, { FC } from "react";

import CustomButton from "../../../custom-button/CustomButton.component";
import { useActions } from "../../../../hooks/useActions";
import { CollectionItem, ShopData } from "../../../../models";

import "./CollectionItem.styles.scss";

// interface CollectionItemViewProps {
//   name: string;
//   price: number;
//   imageUrl: string;
// }

const CollectionItemView: FC<CollectionItem> = collectionItem => {
  const { name, price, imageUrl } = collectionItem;
  const { addItem } = useActions();
  return (
    <div className="collection-item">
      <div className="image" style={{ backgroundImage: `url(${imageUrl})` }} />
      <div className="collection-footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
      <CustomButton onClick={() => addItem(collectionItem)} type="button" inverted withItem>
        Add To Cart
      </CustomButton>
    </div>
  );
};

export default CollectionItemView;
