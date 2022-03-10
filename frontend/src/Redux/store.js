/** @format */

import { createStore, applyMiddleware } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import reducer from "./Reducers/index";

const composed = composeWithDevTools(applyMiddleware(thunk));

export const store = createStore(reducer, composed);
