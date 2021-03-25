import { FC } from "react";
import "./CollectionOverview.styles.scss";

import { useTypedSelector } from "../../../../hooks/useTypedSeletor";
import { useCreateSelector } from "../../../../hooks/useCreateSelector";
// import { createSelector } from "reselect";

import CollectionPreview from "../collection-preview/CollectionPreview.component";

// const shopItemsCreateSelector = createSelector(
//   (shopItems: ShopData[]) => shopItems,
//   (shopItems: ShopData[]) => shopItems
// );

const CollectionOverview: FC = () => {
  const { shopItemsCreateSelector } = useCreateSelector();
  const shopItems = useTypedSelector(({ shop }) => shopItemsCreateSelector(shop));

  return (
    <div className="collection-overview">
      {shopItems.map(item => (
        <CollectionPreview key={item.id} {...item} />
      ))}
    </div>
  );
};

export default CollectionOverview;
