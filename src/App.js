import React from "react";
import Header from "./components/Header";
import Filter from "./components/Filter";
import List from "./components/List";
import Form from "./components/Form";
import { v4 as uuidv4 } from "uuid";

class App extends React.Component {
  state = {
    todoList: JSON.parse(localStorage.getItem("todoList")) || [],
    filterValue: "",
    deletedTodo: JSON.parse(localStorage.getItem("deletedTodo")) || [],
    filterStatus: "Все",
  };

  componentDidUpdate = () => {
    localStorage.setItem("todoList", JSON.stringify(this.state.todoList));
    localStorage.setItem("deletedTodo", JSON.stringify(this.state.deletedTodo));
  };

  handleCreateTodo = (name) => {
    this.setState({
      todoList: this.state.todoList.concat({ name, done: false, id: uuidv4() }),
    });
  };

  handleDoneTodo = (id) => {
    this.setState({
      todoList: this.state.todoList.map((todo) =>
        todo.id === id ? { ...todo, done: true } : todo
      ),
    });
  };

  handleDeleteTodo = (id) => {
    this.setState({
      todoList: this.state.todoList.filter((todo) => todo.id !== id),
      deletedTodo: this.state.deletedTodo.concat(
        this.state.todoList.filter((todo) => todo.id === id)
      ),
    });
  };

  handleChangeFilterValue = (filterValue) => {
    this.setState(() => ({
      filterValue: filterValue,
    }));
  };

  handleChangeFilterStatus = (filterStatus) => {
    this.setState(() => ({ filterStatus: filterStatus }));
  };

  render() {
    const { todoList, filterValue, filterStatus, deletedTodo } = this.state;
    const filterListByStatus = () => {
      if (filterStatus === "Удалённые") {
        return deletedTodo;
      }
      if (filterStatus === "Выполненные") {
        return todoList.filter((todo) => todo.done === true);
      }
      return todoList;
    };
    const filterListByValue = (list) => {
      if (filterValue) {
        return list.filter((todo) =>
          todo.name.toUpperCase().includes(filterValue.toUpperCase())
        );
      }
      return list;
    };
    const filteredList = filterListByValue(filterListByStatus());
    return (
      <div className="wrapper">
        <Header todoNumber={filteredList.length} />
        {(todoList.length > 0 || deletedTodo.length > 0) && (
          <>
            <Filter
              filterStatus={filterStatus}
              onChangeFilterValue={this.handleChangeFilterValue}
              onChangeFilterStatus={this.handleChangeFilterStatus}
            />
            <List
              list={filteredList}
              onDoneTodo={this.handleDoneTodo}
              onDeleteTodo={this.handleDeleteTodo}
            />
          </>
        )}

        <Form onCreateTodo={this.handleCreateTodo} />
      </div>
    );
  }
}

export default App;
