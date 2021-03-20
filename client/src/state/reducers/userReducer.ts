import { UserActionTypes } from "../action-types";
import { UserActions } from "../actions";

interface UserState {
  userId: string | null;
  createdAt: string | null;
}

const initialState: UserState = { userId: null, createdAt: null };

const userReducer = (
  state: UserState = initialState,
  action: UserActions
): UserState => {
  switch (action.type) {
    case UserActionTypes.SET_CURRENT_USER:
      return {
        ...state,
        userId: action.payload.userId,
        createdAt: action.payload.createdAt,
      };
    case UserActionTypes.SIGN_OUT_CURRENT_USER:
      return {
        ...state,
        userId: null,
        createdAt: null,
      };
    default:
      return state;
  }
};

export default userReducer;
