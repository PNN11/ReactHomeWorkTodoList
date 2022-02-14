import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { v4 as uuidv4 } from "uuid";

import { validateForm, validateBeforeSubmit } from "./helpers/validateForm";
import { AddForm } from "./Form.styles";
import Input from "../../components/Input";
import { createTodo } from "../../store/todo";
import { useLocales } from "../../providers/LocalesProvider";
import Button from "../../components/Button";

const Form = () => {
  const { trans, lang } = useLocales();
  const [values, setValues] = useState({
    name: "",
    description: "",
    important: false,
  });
  const [touched, setTouched] = useState(false);
  const error = validateForm[lang](values.name);

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateBeforeSubmit(error, touched, setTouched)) {
      dispatch(createTodo({ ...values, id: uuidv4() }));
      setValues({
        name: "",
        description: "",
        important: false,
      });
      setTouched(false);
    }
  };

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const handleChangeImportant = () => {
    setValues({ ...values, important: !values.important });
  };

  const handleBlur = () => {
    setTouched(true);
  };

  return (
    <section>
      <AddForm>
        <div>
          <Input
            name="name"
            label={trans.form.input.label}
            id="create"
            placeholder={trans.form.input.placeholder}
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.name}
            error={touched && !!error}
            errorMessage={error}
          />
          <Input
            name="description"
            label={trans.form.inputDescription.label}
            id="description"
            placeholder={trans.form.inputDescription.placeholder}
            onChange={handleChange}
            value={values.description}
          />
          <Input
            type="checkbox"
            name="important"
            id="important"
            label={trans.list.important}
            checked={values.important}
            onChange={handleChangeImportant}
          />
        </div>

        <div>
          <Button primary size="big" type="submit" onClick={handleSubmit}>
            {trans.form.button}
          </Button>
        </div>
      </AddForm>
    </section>
  );
};

export default Form;
