import { combineReducers } from "redux";
import appState from "./appState/reducer";
import user from "./user/reducer";
import restraurant from "./restaurant/reducer";

export default combineReducers({
  appState,
  user,
  restraurant,
});
