import React from "react";
import Button from "../Button";
import { AddForm } from "./Form.styles";
import Input from "../Input";

class Form extends React.Component {
  state = { name: "" };

  handleSubmit = (e) => {
    e.preventDefault();
    const { onCreateTodo } = this.props;
    const { name } = this.state;
    if (!name) {
      return;
    }
    onCreateTodo(name);
    this.setState({ name: "" });
  };

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <section>
        <AddForm>
          <Input
            name="name"
            label="Новое задание"
            id="create"
            placeholder="Название"
            onChange={this.handleChange}
            value={this.state.name}
          />
          <div>
            <Button
              name="Создать"
              primary
              size="big"
              type="submit"
              onClick={this.handleSubmit}
            />
          </div>
        </AddForm>
      </section>
    );
  }
}

export default Form;
