/** @format */

import { createStore, applyMiddleware } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
// import reducer from "./Reducers/index.js";
import singleCardReducer from "./Card/reducers";
import { boardsReducer } from "./Reducers/todoTask.js";
import { combineReducers } from "redux";
import userReducer from "./User/reducers";

const rootReducer = combineReducers({
    singleCard: singleCardReducer,
    boards: boardsReducer,
    user: userReducer
})

const composed = composeWithDevTools(applyMiddleware(thunk));

export const store = createStore(rootReducer, composed);
