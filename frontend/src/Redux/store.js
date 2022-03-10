import { createStore, applyMiddleware } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import reducer from "./Reducers/index.js";
import singleCardReducer from "./Card/reducers";
import { boardsReducer } from "./Reducers/todoTask.js";
import { combineReducers } from "redux";
import userReducer from "./User/reducers";
import workspaceReducer from "./Workspace/reducer";

const rootReducer = combineReducers({
    singleCard: singleCardReducer,
    boards: boardsReducer,
    user: userReducer,
    workspace: workspaceReducer
})


const composed = composeWithDevTools(applyMiddleware(thunk));

export const store = createStore(rootReducer, composed);
