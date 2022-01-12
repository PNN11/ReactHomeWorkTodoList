import { createStore, combineReducers } from "redux";

import { filterReducer } from "./filter";

import { todoListReducer } from "./todo";

import { composeWithDevTools } from "redux-devtools-extension";

const rootReduser = combineReducers({
  filterReducer,
  todoListReducer,
});

export const store = createStore(rootReduser, composeWithDevTools());
