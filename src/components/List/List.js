import React from "react";
import { useSelector } from "react-redux";
import { getFilteredList } from "../../store/todo";

import ListItem from "../../containers/ListItem";

import { Title } from "./List.style";

const List = () => {
  const filteredList = useSelector(getFilteredList);

  const TodoItems = filteredList.map(({ id, name, done }) => (
    <ListItem name={name} key={id} done={done} id={id} />
  ));
  return (
    <ul>{filteredList.length ? TodoItems : <Title>Заданий нет</Title>}</ul>
  );
};

export default List;
