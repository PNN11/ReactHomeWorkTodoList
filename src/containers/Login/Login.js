import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

import Button from "../../components/Button";
import Input from "../../components/Input";
import { useLocales } from "../../providers/LocalesProvider";
import { LoginWrapper } from "./Login.styles";
import { loginUser } from "../../store/todo";
import { validateBeforeLogin } from "./helpers/validate";

const Login = () => {
  const { trans } = useLocales();
  const [loginData, setLoginData] = useState({
    login: "",
    password: "",
  });
  const [error, setError] = useState(null);
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setLoginData({ ...loginData, [e.target.name]: e.target.value });
    setError(null);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!loginData.login || !loginData.password) {
      setError(`${trans.login.errors.main}`);
      return;
    }
    const users = JSON.parse(localStorage.getItem("users"));
    const { login, error } = validateBeforeLogin(users, loginData, trans);
    if (login) {
      dispatch(loginUser(login));
      localStorage.setItem("currentUser", login);
    } else {
      setError(error);
    }
  };

  return (
    <LoginWrapper>
      <h1>{trans.login.title}</h1>
      <form onSubmit={handleSubmit}>
        <Input
          label={trans.login.inputLogin.label}
          placeholder={trans.login.inputLogin.placeholder}
          name="login"
          id="login"
          onChange={handleChange}
        />
        <Input
          type="password"
          label={trans.login.inputPassword.label}
          placeholder={trans.login.inputPassword.placeholder}
          id="password"
          name="password"
          onChange={handleChange}
        />
        {error && <h5>{error}</h5>}
        <Button type="submit">{trans.login.button}</Button>
      </form>
      <p>
        {trans.login.reg.text}
        <Link to="/register">{trans.login.reg.link}</Link>
      </p>
    </LoginWrapper>
  );
};

export default Login;
