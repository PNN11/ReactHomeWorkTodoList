import React from "react";
import { useDispatch } from "react-redux";
import { deleteTodo, doneTodo } from "../../store/todo";
import Button from "../../components/Button";
import { ListIt } from "./ListItem.styles";
import { useLocales } from "../../providers/LocalesProvider";

const ListItem = ({ name, done, id }) => {
  const dispatch = useDispatch();
  const { trans } = useLocales();

  const handleDone = () => {
    dispatch(doneTodo(id));
  };

  const handleDelete = () => {
    dispatch(deleteTodo(id));
  };

  return (
    <ListIt done={done}>
      <p>{name}</p>
      <div>
        {!done && (
          <Button type="button" size="small" onClick={handleDone}>
            {trans.list.buttons.done}
          </Button>
        )}
        <Button type="button" size="small" onClick={handleDelete}>
          {trans.list.buttons.delete}
        </Button>
      </div>
    </ListIt>
  );
};

export default ListItem;
