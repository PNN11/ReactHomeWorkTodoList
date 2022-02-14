import React, { useEffect } from "react";
import { useSelector } from "react-redux";

import Header from "../../components/TodoHeader";
import Filter from "../Filter";
import List from "../List";
import Form from "../Form";
import { getFilteredList, getSlice } from "../../store/todo";
import { TodoWrapper } from "./TodoListContainer.style";

const TodoListContainer = () => {
  const { todoList, deletedTodo, currentUser } = useSelector(getSlice);
  const filteredList = useSelector(getFilteredList);

  useEffect(() => {
    localStorage.setItem(
      `${currentUser}`,
      JSON.stringify({ todoList, deletedTodo })
    );
  }, [todoList, deletedTodo, currentUser]);

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
