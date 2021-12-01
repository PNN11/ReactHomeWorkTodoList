import Button from "../Button";
import { FilterForm, SearchElement, BlockBtns } from "./Filter.style";

const Filter = () => {
  return (
    <section>
      <FilterForm>
        <SearchElement>
          <label htmlFor="filter">Поиск по названию</label>
          <input id="filter" placeholder="Начни вводить" />
        </SearchElement>
        <BlockBtns>
          <Button name="Все" primary size="big" />
          <Button name="Выполненные" size="small" />
          <Button name="Удалённые" />
        </BlockBtns>
      </FilterForm>
    </section>
  );
};

export default Filter;
