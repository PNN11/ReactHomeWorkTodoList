import { createStore, combineReducers } from "redux";

import { filterReducer } from "./redusers/filterReducer";

import { todoListReducer } from "./redusers/todoListReducer";

import { composeWithDevTools } from "redux-devtools-extension";

const rootReduser = combineReducers({
  filterReducer,
  todoListReducer,
});

export const store = createStore(rootReduser, composeWithDevTools());
