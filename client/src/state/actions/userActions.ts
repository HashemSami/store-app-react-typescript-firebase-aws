import { UserActionTypes } from "../action-types";
import { User } from "../../models";

interface SetCurrentUser {
  type: UserActionTypes.SET_CURRENT_USER;
  payload: User;
}

interface SignOutCurrentUser {
  type: UserActionTypes.SIGN_OUT_CURRENT_USER;
}

export type UserActions = SetCurrentUser | SignOutCurrentUser;
