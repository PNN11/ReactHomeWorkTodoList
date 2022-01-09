import React from "react";
import Button from "../Button";
import { FilterForm, BlockBtns } from "./Filter.style";
import Input from "../Input";
import { useDispatch } from "react-redux";
import {
  changeFilterValue,
  changeFilterStatus,
} from "../../store/redusers/filterReducer";

const Filter = ({ filterStatus }) => {
  const dispatch = useDispatch();

  const handleFilter = (e) => {
    dispatch(changeFilterValue(e.target.value));
  };

  const handleFilterClick = (e) => {
    dispatch(changeFilterStatus(e.target.name));
  };

  return (
    <section>
      <FilterForm>
        <Input
          name="filterValue"
          label="Поиск по названию"
          placeholder="Начни вводить"
          id="filter"
          onChange={handleFilter}
        />
        <BlockBtns>
          <Button
            primary={filterStatus === "Все"}
            type="button"
            name="Все"
            onClick={handleFilterClick}
          >
            Все
          </Button>
          <Button
            type="button"
            name="Выполненные"
            onClick={handleFilterClick}
            primary={filterStatus === "Выполненные"}
          >
            Выполненные
          </Button>
          <Button
            type="button"
            name="Удалённые"
            onClick={handleFilterClick}
            primary={filterStatus === "Удалённые"}
          >
            Удалённые
          </Button>
        </BlockBtns>
      </FilterForm>
    </section>
  );
};

export default Filter;
