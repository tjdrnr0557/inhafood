import { combineReducers } from "redux";
import user from "./user";
import post from "./post";
import store from "./store";

const rootReducer = combineReducers({
  user,
  post,
  store
});

export default rootReducer;
