export const getSlice = (state) => state.todos;

export const getFilteredList = (state) => {
  const { todoList, deletedTodo, filterStatus, filterValue } = state.todos;

  let filteredList = todoList;
  if (filterStatus === "Deleted") {
    filteredList = deletedTodo;
  }
  if (filterStatus === "Completed") {
    filteredList = todoList.filter((todo) => todo.done === true);
  }
  if (filterStatus === "Important") {
    filteredList = todoList.filter((todo) => todo.important === true);
  }
  if (filterValue) {
    return filteredList.filter((todo) =>
      todo.name.toUpperCase().includes(filterValue.toUpperCase())
    );
  }
  return filteredList;
};

export const getTodosNames = (state) => {
  const { todoList } = state.todos;
  return todoList.map((todo) => todo.name);
};
