export const CREATE_TODO = "CREATE_TODO";

export const DONE_TODO = "DONE_TODO";

export const DELETE_TODO = "DELETE_TODO";

export const EDIT_TODO = "EDIT_TODO";

export const SET_FILTER_VALUE = "SET_FILTER_VALUE";

export const SET_FILTER_STATUS = "SET_FILTER_STATUS";

export const LOGIN = "LOGIN";

export const LOGOUT = "LOGOUT";

export const createTodo = (data) => ({
  type: CREATE_TODO,
  payload: data,
});

export const doneTodo = (id) => ({ type: DONE_TODO, payload: id });

export const deleteTodo = (id) => ({ type: DELETE_TODO, payload: id });

export const editTodo = (id, newTask) => ({
  type: EDIT_TODO,
  payload: { id, newTask },
});

export const changeFilterValue = (value) => ({
  type: SET_FILTER_VALUE,
  payload: value,
});

export const changeFilterStatus = (status) => ({
  type: SET_FILTER_STATUS,
  payload: status,
});

export const loginUser = (login, todoList, deletedTodo) => ({
  type: LOGIN,
  payload: { login, todoList, deletedTodo },
});

export const logoutUser = () => ({ type: LOGOUT });
