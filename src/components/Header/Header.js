import React from "react";
import { useSelector } from "react-redux";
import { getFilteredList } from "../../store/todo/todoSelectors";

import { Head, P } from "./Header.styles";

const Header = () => {
  const list = useSelector(getFilteredList);

  return (
    <Head>
      <h1 className="title">Todo list</h1>
      <P>Количество записей {list.length}</P>
    </Head>
  );
};

export default Header;
