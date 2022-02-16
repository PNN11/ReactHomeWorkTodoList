import React from "react";
import { useSelector } from "react-redux";
import { getFilteredList } from "../../store/todo";
import { useLocales } from "../../providers/LocalesProvider";

import ListItem from "../ListItem";

import { Title } from "./List.style";

const List = () => {
  const filteredList = useSelector(getFilteredList);
  const { trans } = useLocales();

  const todoItems = filteredList.map((item) => (
    <ListItem key={item.id} {...item} />
  ));
  return (
    <ul>
      {filteredList.length ? todoItems : <Title>{trans.list.title}</Title>}
    </ul>
  );
};

export default List;
