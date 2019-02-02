import { combineReducers } from "redux";

import currentUserReducer from "../scenes/Login/services/currentUser/reducer";
import godsReducer from "../scenes/Gods/services/gods/reducer";

const rootReducer = combineReducers({
  currentUser: currentUserReducer,
  gods: godsReducer
});

export default rootReducer;
