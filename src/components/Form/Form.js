import Button from "../Button";
import { AddForm } from "./Form.styles";
import { SearchElement } from "../Filter/Filter.style";

const Form = () => {
  return (
    <section>
      <AddForm>
        <SearchElement>
          <label htmlFor="search">Новое задание</label>
          <input id="search" placeholder="Название" />
        </SearchElement>
        <div>
          <Button name="Создать" primary size="big" />
        </div>
      </AddForm>
    </section>
  );
};

export default Form;
