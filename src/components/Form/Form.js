import React from "react";
import Button from "../Button";
import { validateForm, validateBeforeSubmit } from "./helpers/validateForm";
import { AddForm } from "./Form.styles";
import Input from "../Input";

class Form extends React.Component {
  state = { name: "", error: validateForm(""), touched: false };

  handleSubmit = (e) => {
    e.preventDefault();
    const { onCreateTodo } = this.props;
    const { name, error, touched } = this.state;
    if (validateBeforeSubmit(error, touched, this)) {
      onCreateTodo(name);
      this.setState({ name: "", error: validateForm(""), touched: false });
    }
  };

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
      error: validateForm(e.target.value),
    });
  };

  handleBlur = () => {
    this.setState(() => ({ touched: true }));
  };

  render() {
    const { error, name, touched } = this.state;
    return (
      <section>
        <AddForm>
          <Input
            name="name"
            label="Новое задание"
            id="create"
            placeholder="Название"
            onChange={this.handleChange}
            onBlur={this.handleBlur}
            value={name}
            error={touched && !!error}
            errorMessage={error}
          />
          <div>
            <Button
              primary
              size="big"
              type="submit"
              onClick={this.handleSubmit}
            >
              Создать
            </Button>
          </div>
        </AddForm>
      </section>
    );
  }
}

export default Form;
