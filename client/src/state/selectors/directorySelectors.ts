import { createSelector } from "reselect";

import { RootState } from "../reducers";

type Directory = RootState["directory"];

export const directoryCreateSelector = createSelector(
  (directory: Directory) => directory,
  (directory: Directory) => directory
);
