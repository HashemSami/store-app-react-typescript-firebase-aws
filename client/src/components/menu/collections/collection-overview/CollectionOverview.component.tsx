import { FC } from "react";
import "./CollectionOverview.styles.scss";

import { useTypedSelector } from "../../../../hooks/useTypedSeletor";
import { useCreateSelector } from "../../../../hooks/useCreateSelector";

import CollectionPreview from "../collection-preview/CollectionPreview.component";

const CollectionOverview: FC = () => {
  const { shopItemsArrayCreateSelector } = useCreateSelector();
  const shopItemsArray = useTypedSelector(({ shop }) => shopItemsArrayCreateSelector(shop));

  return (
    <div className="collection-overview">
      {shopItemsArray.map(item => {
        return <CollectionPreview key={item.id} {...item} />;
      })}
    </div>
  );
};

export default CollectionOverview;
