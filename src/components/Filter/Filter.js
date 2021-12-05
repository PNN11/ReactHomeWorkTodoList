import React from "react";
import Button from "../Button";
import { FilterForm, BlockBtns } from "./Filter.style";
import Input from "../Input";

class Filter extends React.Component {
  handleFilter = (e) => {
    const { onChangeFilterValue } = this.props;
    onChangeFilterValue(e.target.value);
  };

  handleFilterClick = (e) => {
    const { onChangeFilterStatus } = this.props;
    onChangeFilterStatus(e.target.textContent);
  };

  render() {
    const { filterStatus } = this.props;
    return (
      <section>
        <FilterForm>
          <Input
            name="filterValue"
            label="Поиск по названию"
            placeholder="Начни вводить"
            id="filter"
            onChange={this.handleFilter}
          />
          <BlockBtns>
            <Button type="button" name="Все" onClick={this.handleFilterClick}>
              {filterStatus === "Все" ? "primary" : ""}
            </Button>
            <Button
              type="button"
              name="Выполненные"
              onClick={this.handleFilterClick}
            >
              {filterStatus === "Выполненные" ? "primary" : ""}
            </Button>
            <Button
              type="button"
              name="Удалённые"
              onClick={this.handleFilterClick}
            >
              {filterStatus === "Удалённые" ? "primary" : ""}
            </Button>
          </BlockBtns>
        </FilterForm>
      </section>
    );
  }
}

export default Filter;
