import React from "react";

import { useLocales } from "../../providers/LocalesProvider";
import { Head, P } from "./TodoHeader.styles";

const TodoHeader = ({ todoNumber }) => {
  const { trans } = useLocales();

  return (
    <Head>
      <h1>{trans.header.title}</h1>
      <P>
        {trans.header.todoNumber} {todoNumber}
      </P>
    </Head>
  );
};

export default TodoHeader;
