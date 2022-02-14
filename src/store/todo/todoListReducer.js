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
  currentUser: localStorage.getItem("currentUser") || null,
  todoList:
    JSON.parse(localStorage.getItem(`${localStorage.getItem("currentUser")}`))
      ?.todoList || [],
  deletedTodo:
    JSON.parse(localStorage.getItem(`${localStorage.getItem("currentUser")}`))
      ?.deletedTodo || [],
  filterValue: "",
  filterStatus: "All",
};

export const todoListReducer = (state = defaultState, action) => {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        currentUser: action.payload,
        todoList: JSON.parse(localStorage.getItem(`${action.payload}`))
          .todoList,
        deletedTodo: JSON.parse(localStorage.getItem(`${action.payload}`))
          .deletedTodo,
      };
    case LOGOUT:
      return { ...state, currentUser: null };
    case CREATE_TODO:
      return {
        ...state,
        todoList: state.todoList.concat({
          name: action.payload.name,
          description: action.payload.description,
          important: action.payload.important,
          done: false,
          id: action.payload.id,
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
