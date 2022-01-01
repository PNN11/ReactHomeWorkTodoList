import React, { useState } from "react";
import Button from "../Button";
import { validateForm, validateBeforeSubmit } from "./helpers/validateForm";
import { AddForm } from "./Form.styles";
import Input from "../Input";

const Form = ({ onCreateTodo }) => {
  const [name, setName] = useState("");
  const [error, setError] = useState(validateForm(""));
  const [touched, setTouched] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateBeforeSubmit(error, touched, setTouched)) {
      onCreateTodo(name);
      setName("");
      setError(validateForm(""));
      setTouched(false);
    }
  };

  const handleChange = (e) => {
    setName(e.target.value);
    setError(validateForm(e.target.value));
  };

  const handleBlur = () => {
    setTouched(true);
  };

  return (
    <section>
      <AddForm>
        <Input
          name="name"
          label="Новое задание"
          id="create"
          placeholder="Название"
          onChange={handleChange}
          onBlur={handleBlur}
          value={name}
          error={touched && !!error}
          errorMessage={error}
        />
        <div>
          <Button primary size="big" type="submit" onClick={handleSubmit}>
            Создать
          </Button>
        </div>
      </AddForm>
    </section>
  );
};

export default Form;
