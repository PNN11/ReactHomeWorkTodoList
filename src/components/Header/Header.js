import React from "react";
import Button from "../Button";
import { useLocales } from "../../providers/LocalesProvider";
import { useTheme } from "../../providers/ThemeProvider/ThemeProvider";

import { Head, P } from "./Header.styles";

const Header = ({ todoNumber }) => {
  const { trans, toggleLang } = useLocales();
  const { header } = trans;
  const { toggleTheme } = useTheme();
  return (
    <Head>
      <h1 className="title">{header.title}</h1>
      <P>
        {header.todoNumber} {todoNumber}
      </P>
      <Button size="small" onClick={toggleTheme}>
        {header.changeTheme}
      </Button>
      <Button size="small" onClick={toggleLang}>
        {header.changeLang}
      </Button>
    </Head>
  );
};

export default Header;
