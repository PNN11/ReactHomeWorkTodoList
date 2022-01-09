import React, { useEffect } from "react";
import Header from "./components/Header";
import Filter from "./components/Filter";
import List from "./components/List";
import Form from "./components/Form";
import { useSelector } from "react-redux";

const App = () => {
  const { todoList, deletedTodo } = useSelector(
    (state) => state.todoListReducer
  );

  const { filterValue, filterStatus } = useSelector(
    (state) => state.filterReducer
  );

  useEffect(() => {
    localStorage.setItem("todoList", JSON.stringify(todoList));
  }, [todoList]);

  useEffect(() => {
    localStorage.setItem("deletedTodo", JSON.stringify(deletedTodo));
  }, [deletedTodo]);

  const filterListByStatus = () => {
    if (filterStatus === "Удалённые") {
      return deletedTodo;
    }
    if (filterStatus === "Выполненные") {
      return todoList.filter((todo) => todo.done === true);
    }
    return todoList;
  };
  const filterListByValue = (list) => {
    if (filterValue) {
      return list.filter((todo) =>
        todo.name.toUpperCase().includes(filterValue.toUpperCase())
      );
    }
    return list;
  };
  const filteredList = filterListByValue(filterListByStatus());

  return (
    <div className="wrapper">
      <Header todoNumber={filteredList.length} />
      {(todoList.length > 0 || deletedTodo.length > 0) && (
        <>
          <Filter filterStatus={filterStatus} />
          <List list={filteredList} />
        </>
      )}

      <Form />
    </div>
  );
};

export default App;
