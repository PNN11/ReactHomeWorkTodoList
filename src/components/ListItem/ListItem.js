import React from "react";
import { useDispatch } from "react-redux";
import { deleteTodo, doneTodo } from "../../store/redusers/todoListReducer";
import Button from "../Button";
import { ListIt } from "./ListItem.styles";

const ListItem = ({ name, done, id }) => {
  const dispatch = useDispatch();

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
            Выполнено
          </Button>
        )}
        <Button type="button" size="small" onClick={handleDelete}>
          Удалить
        </Button>
      </div>
    </ListIt>
  );
};

export default ListItem;
