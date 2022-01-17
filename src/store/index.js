import { createStore, combineReducers } from "redux";

import { todoListReducer } from "./todo";

import { composeWithDevTools } from "redux-devtools-extension";

const rootReduser = combineReducers({
  todoListReducer,
});

export const store = createStore(rootReduser, composeWithDevTools());
