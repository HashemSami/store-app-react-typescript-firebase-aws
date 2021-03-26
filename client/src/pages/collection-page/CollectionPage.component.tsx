import { FC } from "react";
import "./CollectionPage.styles.scss";

import CollectionItemView from "../../components/menu/collections/collection-item-view/CollectionItemView.component";
import { useTypedSelector } from "../../hooks/useTypedSeletor";
import { useCreateSelector } from "../../hooks/useCreateSelector";

import { useHistory, useRouteMatch, useLocation, useParams } from "react-router-dom";

const CollectionPage: FC = () => {
  const { params } = useRouteMatch<{ collectionId: string }>();

  const { getCollectionCreateSelector } = useCreateSelector();

  const collectionItems = useTypedSelector(({ shop }) => getCollectionCreateSelector(params.collectionId)(shop));

  const { title, items } = collectionItems;

  return (
    <div className="collection-page">
      <h2 className="title">{title}</h2>
      <div className="items">
        {items.map(item => (
          <CollectionItemView key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
};

export default CollectionPage;
