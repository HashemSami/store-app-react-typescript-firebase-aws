import { createSelector } from "reselect";
// to memoize the selector function that takes another argument to return the
// create selector function, as this function will not be memoized like if we
// return the createSelector directly
import memoize from "lodash.memoize";

import { RootState } from "../reducers";
// import { ShopData } from "../../models";

type ShopCollections = RootState["shop"];

export const shopItemsCreateSelector = createSelector(
  (shopItems: ShopCollections) => shopItems,
  (shopItems: ShopCollections) => shopItems
);

export const getCollectionCreateSelector = memoize((id: string) =>
  createSelector(
    (shopItems: ShopCollections) => shopItems,
    (shopItems: ShopCollections) => shopItems[id]
  )
);

export const shopItemsArrayCreateSelector = createSelector(
  (shopItems: ShopCollections) => shopItems,
  (shopItems: ShopCollections) => Object.keys(shopItems).map(shopItem => shopItems[shopItem])
);
