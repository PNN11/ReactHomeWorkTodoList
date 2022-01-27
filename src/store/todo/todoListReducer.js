import { v4 as uuidv4 } from "uuid";
import {
  CREATE_TODO,
  DONE_TODO,
  DELETE_TODO,
  EDIT_TODO,
  SET_FILTER_VALUE,
  SET_FILTER_STATUS,
} from "./";

export const defaultState = {
  todoList: JSON.parse(localStorage.getItem("todoList")) || [],
  deletedTodo: JSON.parse(localStorage.getItem("deletedTodo")) || [],
  filterValue: "",
  filterStatus: "All",
};

export const todoListReducer = (state = defaultState, action) => {
  switch (action.type) {
    case CREATE_TODO:
      return {
        ...state,
        todoList: state.todoList.concat({
          name: action.payload,
          done: false,
          id: uuidv4(),
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
            ? { ...todo, name: action.payload.newName }
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
