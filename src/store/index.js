import { createStore, combineReducers } from "redux";

import { todoListReducer } from "./todo";

import { composeWithDevTools } from "redux-devtools-extension";

const rootReduser = combineReducers({
  todos: todoListReducer,
});

export const store = createStore(rootReduser, composeWithDevTools());
