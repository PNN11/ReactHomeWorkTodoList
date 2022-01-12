export const CREATE_TODO = "CREATE_TODO";

export const DONE_TODO = "DONE_TODO";

export const DELETE_TODO = "DELETE_TODO";

export const createTodo = (name) => ({
  type: CREATE_TODO,
  payload: name,
});

export const doneTodo = (id) => ({ type: DONE_TODO, payload: id });

export const deleteTodo = (id) => ({ type: DELETE_TODO, payload: id });
