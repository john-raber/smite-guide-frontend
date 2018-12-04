import { combineReducers } from "redux";

import currentUserReducer from "../scenes/Login/services/currentUser/reducer";

const rootReducer = combineReducers({
  currentUser: currentUserReducer
});

export default rootReducer;
