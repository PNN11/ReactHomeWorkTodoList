import { v4 as uuidv4 } from "uuid";
import { CREATE_TODO, DONE_TODO, DELETE_TODO } from "./";

export const defaultState = {
  todoList: JSON.parse(localStorage.getItem("todoList")) || [],
  deletedTodo: JSON.parse(localStorage.getItem("deletedTodo")) || [],
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
        todoList: state.todoList.filter((todo) => todo.id !== action.payload),
        deletedTodo: state.deletedTodo.concat(
          state.todoList.filter((todo) => todo.id === action.payload)
        ),
      };
    default:
      return state;
  }
};
