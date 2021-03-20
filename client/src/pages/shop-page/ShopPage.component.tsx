import React, { useState } from "react";
import "./ShopPage.styles.scss";
import SHOP_DATA from "./shopData";
import CollectionPreview from "../../components/collection-preview/CollectionPreview.component";

import { ShopData } from "../../models";

const ShopPage = () => {
  const [state, setState] = useState<ShopData[]>(SHOP_DATA);
  return (
    <div className="shop-page">
      {state.map((item) => (
        <CollectionPreview key={item.id} {...item} />
      ))}
    </div>
  );
};

export default ShopPage;
