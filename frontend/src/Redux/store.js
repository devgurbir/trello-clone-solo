import { combineReducers, createStore, applyMiddleware } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import cardReducer from './Card/reducer';

const rootReducer = combineReducers({
    // list of reducers
    card: cardReducer
})

const composed = composeWithDevTools(applyMiddleware(thunk))

export const store = createStore(rootReducer, composed);