import { combineReducers } from "redux";
import { locationReducer } from "./reducers";

const rootReducer = combineReducers({
  location: locationReducer,
});

export default rootReducer;
