import { combineReducers } from "redux";

import userReducer from "./userReducer";
import cartReducer from "./cartReducer";

const reducers = combineReducers({
  currentUser: userReducer,
  cart: cartReducer,
});

export default reducers;

export type RootState = ReturnType<typeof reducers>;
