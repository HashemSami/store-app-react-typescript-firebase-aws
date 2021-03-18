import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "../state";

export const useActions = () => {
  const dispatch = useDispatch();

  // bindActionCreator will bind our action creators to the dispatch function of our store
  // after that all our action creators will be wraped with the dipatch, all we need to do when
  // using this hook is call our action creator and pass the parameters and it will invoke the dispatch for you
  return bindActionCreators(actionCreators, dispatch);
};
