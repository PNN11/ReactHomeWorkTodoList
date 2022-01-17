export const getSlice = (state) => state.todoListReducer;

export const getFilteredList = (state) => {
  const { todoList, deletedTodo, filterStatus, filterValue } =
    state.todoListReducer;

  let filteredList = todoList;
  if (filterStatus === "Удалённые") {
    filteredList = deletedTodo;
  }
  if (filterStatus === "Выполненные") {
    filteredList = todoList.filter((todo) => todo.done === true);
  }
  if (filterValue) {
    return filteredList.filter((todo) =>
      todo.name.toUpperCase().includes(filterValue.toUpperCase())
    );
  }
  return filteredList;
};
