import { getItemFromLocalStorage } from "../../helpers/localStorage";
import {
  CREATE_TODO,
  DONE_TODO,
  DELETE_TODO,
  EDIT_TODO,
  SET_FILTER_VALUE,
  SET_FILTER_STATUS,
  LOGIN,
  LOGOUT,
} from "./";

export const defaultState = {
  currentUser: getItemFromLocalStorage("currentUser") || null,
  todoList:
    getItemFromLocalStorage(getItemFromLocalStorage("currentUser"))?.todoList ||
    [],
  deletedTodo:
    getItemFromLocalStorage(getItemFromLocalStorage("currentUser"))
      ?.deletedTodo || [],
  filterValue: "",
  filterStatus: "All",
};

export const todoListReducer = (state = defaultState, action) => {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        currentUser: action.payload.login,
        todoList: action.payload.todoList,
        deletedTodo: action.payload.deletedTodo,
      };
    case LOGOUT:
      return { ...state, currentUser: null };
    case CREATE_TODO:
      return {
        ...state,
        todoList: state.todoList.concat({
          ...action.payload,
          done: false,
        }),
      };
    case DONE_TODO:
      return {
        ...state,
        todoList: state.todoList.map((todo) =>
          todo.id === action.payload ? { ...todo, done: true } : todo
        ),
      };
    case DELETE_TODO:
      return {
        ...state,
        todoList: state.todoList.filter((todo) => todo.id !== action.payload),
        deletedTodo: state.deletedTodo.concat(
          state.todoList.filter((todo) => todo.id === action.payload)
        ),
      };
    case EDIT_TODO:
      return {
        ...state,
        todoList: state.todoList.map((todo) =>
          todo.id === action.payload.id
            ? { ...todo, ...action.payload.newTask }
            : todo
        ),
      };
    case SET_FILTER_VALUE:
      return { ...state, filterValue: action.payload };
    case SET_FILTER_STATUS:
      return { ...state, filterStatus: action.payload };
    default:
      return state;
  }
};
