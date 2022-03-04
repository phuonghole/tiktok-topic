import { createContext,useState} from "react";
import PostApi from "./api/PostApi";
export const GobalState = createContext();
export const DataProvider = ({ children }) => {
  const state = {
    PostApi: PostApi(),
  };
  return <GobalState.Provider value={state}>{children}</GobalState.Provider>;
};
