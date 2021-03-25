import { DirectoryActionTypes } from "../action-types";

interface getDirectory {
  type: DirectoryActionTypes.GET_DIRECTORY_SECTIONS;
}

export type DirectoryActions = getDirectory;
