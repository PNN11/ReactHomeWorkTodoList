import React from "react";
import { useDispatch, useSelector } from "react-redux";

import Button from "../../components/Button";
import { FilterForm, BlockBtns } from "./Filter.style";
import Input from "../../components/Input";
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
              primary={filterStatus === "All"}
              type="button"
              name="All"
              onClick={handleFilterClick}
            >
              {filter.buttons.all}
            </Button>
            <Button
              type="button"
              name="Completed"
              onClick={handleFilterClick}
              primary={filterStatus === "Completed"}
            >
              {filter.buttons.completed}
            </Button>
            <Button
              type="button"
              name="Important"
              onClick={handleFilterClick}
              primary={filterStatus === "Important"}
            >
              {filter.buttons.important}
            </Button>
            <Button
              type="button"
              name="Deleted"
              onClick={handleFilterClick}
              primary={filterStatus === "Deleted"}
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
