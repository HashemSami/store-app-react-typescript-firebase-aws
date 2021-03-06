import React, { FC } from "react";

import "./CollectionPreview.styles.scss";

import CollectionItemView from "../collection-item-view/CollectionItemView.component";
import { ShopData } from "../../../../models";

import { CollectionItem } from "../../../../models";

interface CollectionPreviewProps {
  id: number;
  title: string;
  routeName: string;
  items: CollectionItem[];
}

const CollectionPreview: FC<CollectionPreviewProps> = ({ title, items }) => {
  return (
    <div className="collection-preview">
      <h1>{title.toUpperCase()}</h1>
      <div className="preview">
        {items
          .filter((item, idx) => idx < 4)
          .map(item => (
            <CollectionItemView key={item.id} {...item} />
          ))}
      </div>
    </div>
  );
};

export default CollectionPreview;
