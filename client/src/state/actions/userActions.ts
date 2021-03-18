import { UserActionTypes } from "../action-types";
import { User } from "../../models";

interface SetCurrentUser {
  type: UserActionTypes.SET_CURRENT_USER;
  payload: User;
}

export type UserActions = SetCurrentUser;
