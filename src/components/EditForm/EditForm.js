import React from "react";
import { useFormik } from "formik";
import * as yup from "yup";

import Input from "../Input";
import Button from "../Button";

const EditForm = ({ initial, trans, todoNames, onClose, onSubmit }) => {
  const { name, description } = trans.form.errors;
  const { values, errors, handleChange, handleSubmit, handleBlur, touched } =
    useFormik({
      initialValues: initial,
      validationSchema: yup.object().shape({
        name: yup
          .string()
          .required(`${name.required}`)
          .min(4, `${name.min}`)
          .max(20, `${name.max}`)
          .notOneOf(
            todoNames.filter((name) => name !== initial.name),
            `${name.sameName}`
          ),
        description: yup.string().max(50, `${description.max}`),
      }),
      onSubmit: (values) => {
        onSubmit(values);
      },
    });
  return (
    <form onSubmit={handleSubmit}>
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
      <div>
        <Button>{trans.modal.buttons.edit}</Button>
        <Button onClick={onClose}>{trans.modal.buttons.close}</Button>
      </div>
    </form>
  );
};

export default EditForm;
