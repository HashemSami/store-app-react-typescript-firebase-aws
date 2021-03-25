import { createSelector } from "reselect";

import { RootState } from "../reducers";

type ShopCollections = RootState["shop"];

export const shopItemsCreateSelector = createSelector(
  (shopItems: ShopCollections) => shopItems,
  (shopItems: ShopCollections) => shopItems
);

export const getCollectionCreateSelector = (id: any) =>
  createSelector(
    (shopItems: ShopCollections) => shopItems,
    (shopItems: ShopCollections) => shopItems.find(item => item.routeName === id.collectionId)
  );
