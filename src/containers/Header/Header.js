import React from "react";
import { useDispatch, useSelector } from "react-redux";

import Button from "../../components/Button";
import { useLocales } from "../../providers/LocalesProvider";
import { useTheme } from "../../providers/ThemeProvider/ThemeProvider";
import { logoutUser, getSlice } from "../../store/todo";
import { HeaderWrapper } from "./Header.styles";

const Header = () => {
  const { trans, toggleLang } = useLocales();
  const { header } = trans;
  const { toggleTheme } = useTheme();
  const dispatch = useDispatch();
  const { currentUser } = useSelector(getSlice);

  const handleLogout = () => {
    dispatch(logoutUser());
    localStorage.removeItem("currentUser");
  };

  return (
    <HeaderWrapper>
      <h1>
        {header.welcome} {currentUser}
      </h1>
      <div>
        <Button onClick={toggleTheme}>{header.changeTheme}</Button>
        <Button onClick={toggleLang}>{header.changeLang}</Button>
        {currentUser && <Button onClick={handleLogout}>{header.logout}</Button>}
      </div>
    </HeaderWrapper>
  );
};

export default Header;
