import { createSelector } from "reselect";

import { RootState } from "../reducers";

type UserId = RootState["currentUser"]["userId"];

export const userCreateSelector = createSelector(
  (userId: UserId) => userId,
  (userId: UserId) => userId
);
