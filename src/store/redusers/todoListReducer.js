import { v4 as uuidv4 } from "uuid";

const defaultState = {
  todoList: JSON.parse(localStorage.getItem("todoList")) || [],
  deletedTodo: JSON.parse(localStorage.getItem("deletedTodo")) || [],
};

const CREATE_TODO = "CREATE_TODO";

const DONE_TODO = "DONE_TODO";

const DELETE_TODO = "DELETE_TODO";

export const todoListReducer = (state = defaultState, action) => {
  switch (action.type) {
    case CREATE_TODO:
      return {
        ...state,
        todoList: state.todoList.concat({
          name: action.name,
          done: false,
          id: uuidv4(),
        }),
      };
    case DONE_TODO:
      return {
        ...state,
        todoList: state.todoList.map((todo) =>
          todo.id === action.id ? { ...todo, done: true } : todo
        ),
      };
    case DELETE_TODO:
      return {
        todoList: state.todoList.filter((todo) => todo.id !== action.id),
        deletedTodo: state.deletedTodo.concat(
          state.todoList.filter((todo) => todo.id === action.id)
        ),
      };
    default:
      return state;
  }
};

export const createTodo = (name) => ({
  type: CREATE_TODO,
  name,
});

export const doneTodo = (id) => ({ type: DONE_TODO, id });

export const deleteTodo = (id) => ({ type: DELETE_TODO, id });
