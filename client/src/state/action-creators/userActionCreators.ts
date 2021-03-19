import { UserActionTypes } from "../action-types";
import { Dispatch } from "redux";

import { UserActions } from "../actions";
import { getUser, createUser } from "../../api/userApi";

export const setCurrentUser = (
  uid: string,
  token: string,
  additionalData?: any
) => {
  return async (dispatch: Dispatch<UserActions>) => {
    let user: any = await getUser(token);

    if (!user) {
      const userData = { uid, ...additionalData };

      user = await createUser(token, userData);
    }
    dispatch({ type: UserActionTypes.SET_CURRENT_USER, payload: user });
  };
};

export const signOutCurrentUser = () => {
  return (dispatch: Dispatch<UserActions>) => {
    dispatch({ type: UserActionTypes.SIGN_OUT_CURRENT_USER });
  };
};
