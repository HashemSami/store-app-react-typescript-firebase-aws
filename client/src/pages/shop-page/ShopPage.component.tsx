import React, { useState } from "react";
import "./ShopPage.styles.scss";
import SHOP_DATA from "./shopData";
import CollectionPreview from "../../components/collection-preview/CollectionPreview.component";

const ShopPage = () => {
  const [state, setState] = useState(SHOP_DATA);
  return (
    <div className="shop-page">
      {state.map(({ id, ...otherCollectionProps }) => (
        <CollectionPreview key={id} {...otherCollectionProps} />
      ))}
    </div>
  );
};

export default ShopPage;
