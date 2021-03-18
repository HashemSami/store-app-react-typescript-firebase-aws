import { UserActionTypes } from "../action-types";
import { UserActions } from "../actions";

interface UserState {
  userId: string | null;
  createdAt: string | null;
}

const initialState = { userId: null, createdAt: null };

const userReducer = (
  state: UserState = initialState,
  action: UserActions
): UserState => {
  switch (action.type) {
    case UserActionTypes.SET_CURRENT_USER:
      return {
        userId: action.payload.userId,
        createdAt: action.payload.cteatedAt,
      };
    default:
      return state;
  }
};

export default userReducer;
