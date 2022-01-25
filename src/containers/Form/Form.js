import React, { useState } from "react";
import Button from "../../components/Button";
import { validateForm, validateBeforeSubmit } from "./helpers/validateForm";
import { AddForm } from "./Form.styles";
import Input from "../../components/Input";
import { useDispatch } from "react-redux";
import { createTodo } from "../../store/todo";
import { useLocales } from "../../providers/LocalesProvider";

const Form = () => {
  const { trans, lang } = useLocales();
  const [name, setName] = useState("");
  const [touched, setTouched] = useState(false);
  const error = validateForm[lang](name);

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateBeforeSubmit(error, touched, setTouched)) {
      dispatch(createTodo(name));
      setName("");

      setTouched(false);
    }
  };

  const handleChange = (e) => {
    setName(e.target.value);
  };

  const handleBlur = () => {
    setTouched(true);
  };

  return (
    <section>
      <AddForm>
        <Input
          name="name"
          label={trans.form.input.label}
          id="create"
          placeholder={trans.form.input.placeholder}
          onChange={handleChange}
          onBlur={handleBlur}
          value={name}
          error={touched && !!error}
          errorMessage={error}
        />
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
