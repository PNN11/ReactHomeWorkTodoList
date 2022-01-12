import React from "react";
import Button from "../../components/Button";
import { FilterForm, BlockBtns } from "./Filter.style";
import Input from "../../components/Input";
import { useDispatch, useSelector } from "react-redux";
import {
  changeFilterValue,
  changeFilterStatus,
  getFilter,
} from "../../store/filter";
import { getSlice } from "../../store/todo";

const Filter = () => {
  const dispatch = useDispatch();

  const { filterStatus } = useSelector(getFilter);
  const { todoList, deletedTodo } = useSelector(getSlice);

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
      )}
    </section>
  );
};

export default Filter;
