import { FC } from "react";
import "./CollectionPage.styles.scss";

import CollectionItemView from "../../components/menu/collections/collection-item-view/CollectionItemView.component";
import { useTypedSelector } from "../../hooks/useTypedSeletor";
import { useCreateSelector } from "../../hooks/useCreateSelector";

import { useHistory, useRouteMatch, useLocation, useParams } from "react-router-dom";

const CollectionPage: FC = () => {
  const { params } = useRouteMatch();
  const { getCollectionCreateSelector } = useCreateSelector();

  const collectionItems = useTypedSelector(({ shop }) => getCollectionCreateSelector(params)(shop));

  console.log(params);

  return (
    <div className="category">
      {collectionItems?.items.map(item => (
        <CollectionItemView key={item.id} {...item} />
      ))}
    </div>
  );
};

export default CollectionPage;
