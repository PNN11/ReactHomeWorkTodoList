import React from "react";
import Button from "../../components/Button";
import { FilterForm, BlockBtns } from "./Filter.style";
import Input from "../../components/Input";
import { useDispatch, useSelector } from "react-redux";

import {
  getSlice,
  changeFilterValue,
  changeFilterStatus,
} from "../../store/todo";
import { useLocales } from "../../providers/LocalesProvider";

const Filter = () => {
  const dispatch = useDispatch();
  const { trans } = useLocales();
  const { filter } = trans;

  const { todoList, deletedTodo, filterStatus } = useSelector(getSlice);

  const handleFilter = (e) => {
    dispatch(changeFilterValue(e.target.value));
  };

  const handleFilterClick = (e) => {
    dispatch(changeFilterStatus(e.target.name));
  };

  return (
    <section>
      {(todoList.length > 0 || deletedTodo.length > 0) && (
        <FilterForm>
          <Input
            name="filterValue"
            label={filter.input.label}
            placeholder={filter.input.placeholder}
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
              {filter.buttons.all}
            </Button>
            <Button
              type="button"
              name="Выполненные"
              onClick={handleFilterClick}
              primary={filterStatus === "Выполненные"}
            >
              {filter.buttons.completed}
            </Button>
            <Button
              type="button"
              name="Удалённые"
              onClick={handleFilterClick}
              primary={filterStatus === "Удалённые"}
            >
              {filter.buttons.deleted}
            </Button>
          </BlockBtns>
        </FilterForm>
      )}
    </section>
  );
};

export default Filter;
