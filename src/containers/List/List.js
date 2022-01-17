import React from "react";
import { useSelector } from "react-redux";
import { getFilteredList } from "../../store/todo";
import { useLocales } from "../../providers/LocalesProvider";

import ListItem from "../ListItem";

import { Title } from "./List.style";

const List = () => {
  const filteredList = useSelector(getFilteredList);
  const { trans } = useLocales();

  const TodoItems = filteredList.map(({ id, name, done }) => (
    <ListItem name={name} key={id} done={done} id={id} />
  ));
  return (
    <ul>
      {filteredList.length ? TodoItems : <Title>{trans.list.title}</Title>}
    </ul>
  );
};

export default List;
