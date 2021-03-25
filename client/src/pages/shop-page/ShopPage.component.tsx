import { FC } from "react";
import "./ShopPage.styles.scss";

import { Route } from "react-router-dom";
import { useHistory, useRouteMatch, useLocation, useParams } from "react-router-dom";

import CollectionOverview from "../../components/menu/collections/collection-overview/CollectionOverview.component";
import CollectionPage from "../collection-page/CollectionPage.component";

const ShopPage: FC = () => {
  const match = useRouteMatch();

  return (
    <div className="shop-page">
      <Route exact path={`${match.path}`}>
        <CollectionOverview />
      </Route>
      <Route path={`${match.path}/:collectionId`}>
        <CollectionPage />
      </Route>
    </div>
  );
};

export default ShopPage;
