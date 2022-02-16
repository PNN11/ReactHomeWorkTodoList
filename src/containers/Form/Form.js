import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import { useFormik } from "formik";
import * as yup from "yup";

import { AddForm } from "./Form.styles";
import Input from "../../components/Input";
import { createTodo, getTodosNames } from "../../store/todo";
import { useLocales } from "../../providers/LocalesProvider";
import Button from "../../components/Button";

const Form = () => {
  const { trans } = useLocales();
  const { name, description } = trans.form.errors;

  const todoNames = useSelector(getTodosNames);

  const dispatch = useDispatch();

  const {
    values,
    handleBlur,
    handleChange,
    handleSubmit,
    handleReset,
    errors,
    touched,
  } = useFormik({
    initialValues: {
      name: "",
      description: "",
      important: false,
    },
    validationSchema: yup.object().shape({
      name: yup
        .string()
        .required(`${name.required}`)
        .min(4, `${name.min}`)
        .max(20, `${name.max}`)
        .notOneOf(todoNames, `${name.sameName}`),
      description: yup.string().max(50, `${description.max}`),
    }),
    onSubmit: (values) => {
      dispatch(
        createTodo({
          ...values,
          id: uuidv4(),
          date: new Date().toLocaleString(),
        })
      );
      handleReset();
    },
  });

  return (
    <section>
      <AddForm onSubmit={handleSubmit}>
        <div>
          <Input
            name="name"
            label={trans.form.input.label}
            id="create"
            placeholder={trans.form.input.placeholder}
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.name}
            error={touched.name && !!errors.name}
            errorMessage={touched.name && errors.name}
          />
          <Input
            name="description"
            label={trans.form.inputDescription.label}
            id="description"
            placeholder={trans.form.inputDescription.placeholder}
            onChange={handleChange}
            value={values.description}
            error={touched.description && !!errors.description}
            errorMessage={touched.description && errors.description}
          />
          <Input
            type="checkbox"
            name="important"
            id="important"
            label={trans.list.important}
            checked={values.important}
            onChange={handleChange}
          />
        </div>

        <div>
          <Button primary size="big" type="submit">
            {trans.form.button}
          </Button>
        </div>
      </AddForm>
    </section>
  );
};

export default Form;
