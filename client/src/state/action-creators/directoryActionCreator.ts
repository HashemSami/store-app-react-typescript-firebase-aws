import { DirectoryActionTypes } from "../action-types";
import { DirectoryActions } from "../actions";

export const getDirectorySections = (): DirectoryActions => {
  return { type: DirectoryActionTypes.GET_DIRECTORY_SECTIONS };
};
