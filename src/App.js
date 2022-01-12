import React, { useEffect } from "react";
import Header from "./components/Header";
import Filter from "./containers/Filter";
import List from "./components/List";
import Form from "./containers/Form";
import { useSelector } from "react-redux";
import { getSlice } from "./store/todo";

const App = () => {
  const { todoList, deletedTodo } = useSelector(getSlice);

  useEffect(() => {
    localStorage.setItem("todoList", JSON.stringify(todoList));
  }, [todoList]);

  useEffect(() => {
    localStorage.setItem("deletedTodo", JSON.stringify(deletedTodo));
  }, [deletedTodo]);

  return (
    <div className="wrapper">
      <Header />
      <Filter />
      <List />
      <Form />
    </div>
  );
};

export default App;
