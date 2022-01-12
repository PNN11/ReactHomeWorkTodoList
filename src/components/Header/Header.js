import React from "react";

import { Head, P } from "./Header.styles";

const Header = ({ todoNumber }) => {
  return (
    <Head>
      <h1 className="title">Todo list</h1>
      <P>Количество записей {todoNumber}</P>
    </Head>
  );
};

export default Header;
