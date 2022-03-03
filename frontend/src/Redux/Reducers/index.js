/** @format */

import { combineReducers } from "redux";
import { boardsReducer } from "./todoTask";

const reducer = combineReducers({
  boards: boardsReducer,
});

export default reducer;
