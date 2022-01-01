import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import Filter from "./components/Filter";
import List from "./components/List";
import Form from "./components/Form";
import { v4 as uuidv4 } from "uuid";

const App = () => {
  const [todoList, setTodoList] = useState(
    JSON.parse(localStorage.getItem("todoList")) || []
  );
  const [deletedTodo, setDeletedTodo] = useState(
    JSON.parse(localStorage.getItem("deletedTodo")) || []
  );
  const [filterValue, setFilterValue] = useState("");
  const [filterStatus, setFilterStatus] = useState("Все");

  useEffect(() => {
    localStorage.setItem("todoList", JSON.stringify(todoList));
  }, [todoList]);

  useEffect(() => {
    localStorage.setItem("deletedTodo", JSON.stringify(deletedTodo));
  }, [deletedTodo]);

  const handleCreateTodo = (name) => {
    setTodoList((prev) => prev.concat({ name, done: false, id: uuidv4() }));
  };

  const handleDeleteTodo = (id) => {
    setTodoList(() => todoList.filter((todo) => todo.id !== id));
    setDeletedTodo((prev) =>
      prev.concat(todoList.filter((todo) => todo.id === id))
    );
  };

  const handleDoneTodo = (id) => {
    setTodoList(() =>
      todoList.map((todo) => (todo.id === id ? { ...todo, done: true } : todo))
    );
  };

  const handleChangeFilterValue = (filterValue) => {
    setFilterValue(filterValue);
  };

  const handleChangeFilterStatus = (filterStatus) => {
    setFilterStatus(filterStatus);
  };

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
          <Filter
            filterStatus={filterStatus}
            onChangeFilterValue={handleChangeFilterValue}
            onChangeFilterStatus={handleChangeFilterStatus}
          />
          <List
            list={filteredList}
            onDoneTodo={handleDoneTodo}
            onDeleteTodo={handleDeleteTodo}
          />
        </>
      )}

      <Form onCreateTodo={handleCreateTodo} />
    </div>
  );
};

export default App;
