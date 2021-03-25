import { ShopData } from "../../models";
import { ShopActions } from "../actions";
import SHOP_DATA from "../utils/shopData";

// interface shopReducerState{

// }

const initialState = SHOP_DATA;

const shopReducer = (state: ShopData[] = initialState, action: ShopActions) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default shopReducer;
