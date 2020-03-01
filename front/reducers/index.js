import { combineReducers } from "redux";
import user from "./user";
import post from "./post";
import stores from "./stores";

const rootReducer = combineReducers({
  user,
  post,
  stores
});

export default rootReducer;
