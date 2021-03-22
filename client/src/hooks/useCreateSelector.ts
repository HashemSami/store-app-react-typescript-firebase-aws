import { createSelector } from "reselect";
import { useSelector, TypedUseSelectorHook } from "react-redux";
import { RootState } from "../state";

// this will add our store types to the useselector hook so "react-redux" can
// know what types does my "redux" store has.
// then I can use useTypedSelector to get my state inside any component
const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;

export const useCreateSelector = createSelector(
  (state) => state,
  (state) => state
);
