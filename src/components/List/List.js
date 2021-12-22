import React from "react";

import ListItem from "../ListItem";

import { Title } from "./List.style";
const List = ({ list, onDoneTodo, onDeleteTodo }) => {
  const TodoItems = list.map(({ id, name, done }) => (
    <ListItem
      name={name}
      key={id}
      done={done}
      onDoneClick={onDoneTodo}
      id={id}
      onDeleteClick={onDeleteTodo}
    />
  ));
  return <ul>{list.length ? TodoItems : <Title>Заданий нет</Title>}</ul>;
};

export default List;
