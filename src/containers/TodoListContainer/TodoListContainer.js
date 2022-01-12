import React, { useEffect } from "react";
import Header from "../../components/Header";
import Filter from "../Filter";
import List from "../List";
import Form from "../Form";
import { useSelector } from "react-redux";
import { getFilteredList, getSlice } from "../../store/todo";
import { TodoWrapper } from "./TodoListContainer.style";

const TodoListContainer = () => {
  const { todoList, deletedTodo } = useSelector(getSlice);
  const filteredList = useSelector(getFilteredList);

  useEffect(() => {
    localStorage.setItem("todoList", JSON.stringify(todoList));
  }, [todoList]);

  useEffect(() => {
    localStorage.setItem("deletedTodo", JSON.stringify(deletedTodo));
  }, [deletedTodo]);

  return (
    <TodoWrapper>
      <Header todoNumber={filteredList.length} />
      <Filter />
      <List />
      <Form />
    </TodoWrapper>
  );
};

export default TodoListContainer;
