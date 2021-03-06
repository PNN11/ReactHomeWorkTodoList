import React, { useEffect, useState, useMemo } from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

import Button from "../../components/Button";
import Input from "../../components/Input";
import { useLocales } from "../../providers/LocalesProvider";
import { LoginWrapper } from "../Login/Login.styles";
import { loginUser } from "../../store/todo";
import {
  getItemFromLocalStorage,
  setItemToLocalStorage,
} from "../../helpers/localStorage";

const Register = () => {
  const [users, setUsers] = useState(getItemFromLocalStorage("users") || []);
  const { trans } = useLocales();
  const dispatch = useDispatch();

  const logins = useMemo(() => users.map((user) => user.login), [users]);

  useEffect(() => {
    setItemToLocalStorage("users", users);
  }, [users]);

  const handleCreateUser = (user) => {
    setUsers([...users, { ...user, id: users.length }]);
    setItemToLocalStorage(`${user.login}`, { todoList: [], deletedTodo: [] });
    dispatch(loginUser(user.login, [], []));
    setItemToLocalStorage("currentUser", user.login);
  };

  const { values, handleBlur, handleChange, handleSubmit, errors, touched } =
    useFormik({
      initialValues: {
        login: "",
        name: "",
        lastName: "",
        email: "",
        password: "",
      },
      validationSchema: yup.object().shape({
        login: yup
          .string()
          .required(`${trans.register.errors.login}`)
          .notOneOf(logins, `${trans.register.errors.sameLogin}`),
        name: yup.string().required(`${trans.register.errors.name}`),
        lastName: yup.string().required(`${trans.register.errors.lastName}`),
        email: yup
          .string()
          .required(`${trans.register.errors.email}`)
          .email(`${trans.register.errors.invalidEmail}`),
        password: yup.string().required(`${trans.register.errors.password}`),
      }),
      onSubmit: (values) => {
        handleCreateUser(values);
      },
    });

  return (
    <LoginWrapper>
      <h1>{trans.register.title}</h1>
      <form onSubmit={handleSubmit}>
        <Input
          label={trans.register.inputLogin.label}
          placeholder={trans.register.inputLogin.placeholder}
          id="login"
          value={values.login}
          error={touched.login && !!errors.login}
          errorMessage={touched.login && errors.login}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        <Input
          label={trans.register.inputName.label}
          placeholder={trans.register.inputName.placeholder}
          id="name"
          value={values.name}
          error={touched.name && !!errors.name}
          errorMessage={touched.name && errors.name}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        <Input
          label={trans.register.inputLastName.label}
          placeholder={trans.register.inputLastName.placeholder}
          id="lastName"
          value={values.lastName}
          error={touched.lastName && !!errors.lastName}
          errorMessage={touched.lastName && errors.lastName}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        <Input
          label={trans.register.inputEmail.label}
          placeholder={trans.register.inputEmail.placeholder}
          id="email"
          value={values.email}
          error={touched.email && !!errors.email}
          errorMessage={touched.email && errors.email}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        <Input
          type="password"
          label={trans.register.inputPassword.label}
          placeholder={trans.register.inputPassword.placeholder}
          id="password"
          value={values.password}
          error={touched.password && !!errors.password}
          errorMessage={touched.password && errors.password}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        <Button type="submit">{trans.register.button}</Button>
      </form>
      <p>
        {trans.register.log.text}{" "}
        <Link to="/login">{trans.register.log.link}</Link>
      </p>
    </LoginWrapper>
  );
};

export default Register;
